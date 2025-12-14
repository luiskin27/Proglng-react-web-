import { Link } from 'react-router-dom'

const memes = [
  { id: 1, title: 'Когда дедлайн был вчера', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93dBCCm0-Ad2SqMPvVdpbnUB55K-8m2_FzA&s' },
  { id: 2, title: 'Препод: "это будет легко"', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHdw_y4l8BJNWU0q3vTekW_yy7VM0BPfwxg&s' },
  { id: 3, title: 'Я после пары по матану', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgT7_ni2Eit0RJaSVvvgX3WVFJ9WfC2AcOg&s' },
  { id: 4, title: 'Когда код запустился с первого раза', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoFcivS5eLvoszeMdc6xiEz3jJA_bkm_zaA&s' },
  { id: 5, title: 'Я в 3 часа ночи перед сдачей', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRif4wSqk6X8ApjbnWEIwn-fvvtbu7VULB69g&s' },
]

export default function Home() {
  return (
    <div className="container">
      <h1>Мемотека студента</h1>
      <p className="subtitle">коллекция боли и страданий 2025 года</p>

      <div className="grid">
        {memes.map(meme => (
          <Link key={meme.id} to={`/meme/${meme.id}`} className="card">
            <img src={meme.image} alt={meme.title} className="preview" />
            <div className="card-title">{meme.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}