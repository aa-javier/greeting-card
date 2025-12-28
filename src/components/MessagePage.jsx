import { useEffect, useState } from "react"

export default function MessagePage({ category, page, onNext }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/texts/${category}/text${page}.json`)
      .then(res => res.ok ? res.json() : null)
      .then(setData)
      .catch(() => setData(null))
  }, [category, page])

  if (!data) {
    return (
      <div className="container">
        <p>Halaman ini masih kosong 🤍</p>
        <button onClick={onNext}>Lanjut</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>{data.title}</h1>
      <p style={{ lineHeight: 1.6 }}>{data.content}</p>
      <button onClick={onNext}>Lanjut ➜</button>
    </div>
  )
}
