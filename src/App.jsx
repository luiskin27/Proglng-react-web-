import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'

export default function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Мемотека 2025</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme/:id" element={<Detail />} />
      </Routes>
    </>
  )
}