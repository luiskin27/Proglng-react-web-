import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import BasketList from './pages/BasketList.jsx'
import BasketDetail from './pages/BasketDetail.jsx'

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meme/:id" element={<Detail />} />
          <Route path="/baskets" element={<BasketList />} />
          <Route path="/basket/:id" element={<BasketDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}