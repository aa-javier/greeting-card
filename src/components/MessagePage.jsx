import { useEffect, useState } from "react"

export default function MessagePage({ category, page, onNext }) {
  const [data, setData] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    fetch(`/texts/${category}/text${page}.json`)
      .then(res => res.ok ? res.json() : null)
      .then(d => {
        setData(d)
        setTimeout(() => setShow(true), 100)
      })
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
    <div className="page">
      <div className={`card ${show ? "show" : ""}`}>
        {data.title && (
          <h1 className="title">
            ✨ {data.title}
          </h1>
        )}

        {data.type === "text" && (
          <p className="content">{data.content}</p>
        )}

        {data.type === "gallery" && (
          <div className="gallery">
            {data.images.map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        )}

        {data.type === "video" && (
          <video
            src={data.url}
            controls
            style={{ width: "100%", borderRadius: 12 }}
          />
        )}

        <div className="line"></div>

        <button className="next" onClick={onNext}>
          Lanjut →
        </button>
      </div>

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .card {
          max-width: 520px;
          width: 100%;
          padding: 28px 24px;
          border-radius: 20px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .title {
          text-align: center;
          margin-bottom: 16px;
        }

        .content {
          line-height: 1.7;
          text-align: center;
          white-space: pre-line;
          opacity: 0.9;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
        }

        .gallery img {
          width: 100%;
          border-radius: 12px;
          object-fit: cover;
        }

        .line {
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: 24px 0;
        }

        .next {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: #2563eb;
          color: white;
          font-size: 16px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
