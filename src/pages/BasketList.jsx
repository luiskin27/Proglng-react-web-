import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext.jsx'

export default function BasketList() {
  const { orders } = useBasket()

  if (orders.length === 0) {
    return (
      <div className="container">
        <h1>Мой пакет</h1>
        <p>Пока пусто Добавьте мемы из главной страницы!</p>
        <Link to="/" className="back">← На главную</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Мой пакет ({orders.length} заказов)</h1>
      <div className="grid">
        {orders.map(order => (
          <Link key={order.id} to={`/basket/${order.id}`} className="card">
            <div className="card-title">Заказ от {order.date}</div>
            <p>Мемов: {order.products.length}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}