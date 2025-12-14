import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Мемотека 2025</Link>
        <nav className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/baskets">Корзина </Link> 
        </nav>
      </div>
    </header>
  )
}