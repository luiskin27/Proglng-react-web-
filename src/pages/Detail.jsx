import { Link, useParams, useNavigate } from 'react-router-dom'
import { useBasket } from '../context/BasketContext.jsx'

const memes = [
  { id: 1, title: 'Когда дедлайн был вчера', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93dBCCm0-Ad2SqMPvVdpbnUB55K-8m2_FzA&s', text: 'и ты сидишь в 4 утра с красными глазами и тремя банками энергетика' },
  { id: 2, title: 'Препод: "это будет легко"', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHdw_y4l8BJNWU0q3vTekW_yy7VM0BPfwxg&s', text: 'а потом выдаёт задачу на 300 строк и говорит "до следующей пары"' },
  { id: 3, title: 'Я после пары по матану', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgT7_ni2Eit0RJaSVvvgX3WVFJ9WfC2AcOg&s', text: 'мозг просто вытекает через уши' },
  { id: 4, title: 'Когда код запустился с первого раза', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoFcivS5eLvoszeMdc6xiEz3jJA_bkm_zaA&s', text: 'подозрительно... где-то точно баг' },
  { id: 5, title: 'Я в 3 часа ночи перед сдачей', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRif4wSqk6X8ApjbnWEIwn-fvvtbu7VULB69g&s', text: 'главное — чтобы комп не вырубился' },
]

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToBasket } = useBasket()
  const meme = memes.find(m => m.id === Number(id))

  if (!meme) return <div className="container">Мем не найден</div>

  const handleAdd = () => {
    addToBasket(meme)
    navigate('/baskets')
  }

  return (
    <div className="container">
      <Link to="/" className="back">← К мемам</Link>
      <div className="detail-card">
        <h1>{meme.title}</h1>
        <img src={meme.image} alt={meme.title} className="full-meme" />
        <p className="description">{meme.text}</p>
        <button onClick={handleAdd} style={{padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '2rem'}}>
          Добавить в корзину мемов
        </button>
      </div>
    </div>
  )
}