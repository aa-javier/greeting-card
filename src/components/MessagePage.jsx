import { useEffect, useState } from "react"

export default function MessagePage({ zodiac, page, onNext }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/texts/${zodiac}/text${page}.json`)
      .then(res => res.ok ? res.json() : null)
      .then(setData)
      .catch(() => setData(null))
  }, [zodiac, page])

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <p>✨ Halaman ini masih kosong ✨</p>
        <button onClick={onNext}>Lanjut</button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      {data.image && <img src={data.image} width="70%" />}
      <br />
      <button onClick={onNext}>Lanjut ➜</button>
    </div>
  )
}
