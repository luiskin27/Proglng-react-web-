import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function UpdateOrder() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userId, setUserId] = useState(1)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${id}`)
      .then(res => res.json())
      .then(data => {
        setUserId(data.userId)
        setProducts(data.products)
      })
  }, [id])

  const addProduct = () => setProducts([...products, { productId: '', quantity: 1 }])

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products]
    newProducts[index][field] = value
    setProducts(newProducts)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://fakestoreapi.com/carts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, date: new Date().toISOString(), products })
    })
      .then(res => res.json())
      .then(() => {
        alert('Заказ обновлён!')
        navigate(`/basket/${id}`)
      })
  }

  return (
    <div className="container">
      <h1>Редактировать заказ #{id}</h1>
      <form onSubmit={handleSubmit} className="detail-card">
        <label>Пользователь ID: <input type="number" value={userId} onChange={e => setUserId(+e.target.value)} /></label>
        <h2>Товары:</h2>
        {products.map((product, index) => (
          <div key={index} style={{marginBottom: '1rem'}}>
            <input type="number" placeholder="Товар ID" value={product.productId} onChange={e => handleProductChange(index, 'productId', +e.target.value)} />
            <input type="number" placeholder="Кол-во" value={product.quantity} onChange={e => handleProductChange(index, 'quantity', +e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={addProduct}>Добавить товар</button>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}