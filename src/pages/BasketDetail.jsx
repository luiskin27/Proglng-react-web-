import { useParams, Link, useNavigate } from 'react-router-dom'
import { useBasket } from '../context/BasketContext.jsx'

export default function BasketDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { orders, deleteOrder, updateQuantity } = useBasket()
  const order = orders.find(o => o.id === Number(id))

  if (!order) return <div className="container">Заказ не найден</div>

  const handleDelete = () => {
    if (confirm('Удалить этот заказ?')) {
      deleteOrder(order.id)
      navigate('/baskets')
    }
  }

  return (
    <div className="container">
      <Link to="/baskets" className="back">← К корзине</Link>
      <div className="detail-card">
        <h1>Заказ от {order.date}</h1>
        <ul style={{textAlign: 'left', maxWidth: '600px', margin: '2rem auto'}}>
          {order.products.map(product => (
            <li key={product.id} style={{margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <img src={product.image} alt={product.title} style={{width: '80px', borderRadius: '10px'}} />
              <div style={{flex: 1}}>
                <strong>{product.title}</strong>
                <div style={{marginTop: '0.5rem'}}>
                  Количество: 
                  <input 
                    type="number" 
                    min="0"
                    value={product.quantity} 
                    onChange={(e) => updateQuantity(order.id, product.id, Number(e.target.value))}
                    style={{width: '60px', marginLeft: '0.5rem', padding: '0.5rem'}}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleDelete} style={{background: 'red', padding: '1rem 2rem', marginTop: '2rem'}}>
          Удалить заказ
        </button>
      </div>
    </div>
  )
}