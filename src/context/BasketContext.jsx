import { createContext, useContext, useState } from 'react'


const BasketContext = createContext()

export function BasketProvider({ children }) {
  const [orders, setOrders] = useState([]) 

  
  const addToBasket = (meme) => {
    const newOrder = {
      id: Date.now(), 
      date: new Date().toLocaleDateString(),
      products: [{ ...meme, quantity: 1 }]
    }
    setOrders([...orders, newOrder])
    alert(`Мем "${meme.title}" добавлен в корзину!`)
  }

  
  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id))
  }


  const updateQuantity = (orderId, memeId, newQuantity) => {
    if (newQuantity <= 0) {
      
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, products: order.products.filter(p => p.id !== memeId) }
          : order
      ))
    } else {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? {
              ...order,
              products: order.products.map(p => 
                p.id === memeId ? { ...p, quantity: newQuantity } : p
              )
            }
          : order
      ))
    }
  }

  return (
    <BasketContext.Provider value={{ orders, addToBasket, deleteOrder, updateQuantity }}>
      {children}
    </BasketContext.Provider>
  )
}


export function useBasket() {
  return useContext(BasketContext)
}