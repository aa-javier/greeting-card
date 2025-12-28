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
      <div className="page">
        <button onClick={onNext}>Lanjut</button>
      </div>
    )
  }

  return (
    <div className="page scrapbook-bg">
      <div className="paper">
        {data.title && <h1>{data.title}</h1>}

        {data.type === "text" && (
          <p className="paper-text">{data.content}</p>
        )}

        <button className="next-btn" onClick={onNext}>
          Lanjut →
        </button>
      </div>

      <style>{`
        .scrapbook-bg {
          min-height: 100vh;
          background: #e8dcc8;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 20px;
        }

        .paper {
          position: relative;
          max-width: 520px;
          width: 100%;
          background: #fff;
          padding: 40px 30px;
          border-radius: 6px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        /* Robekan bawah */
        .paper::after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 40px;
          background: #e8dcc8;
          clip-path: polygon(
            0 0, 5% 20%, 10% 0, 15% 30%, 20% 0,
            25% 25%, 30% 0, 35% 20%, 40% 0,
            45% 30%, 50% 0, 55% 25%, 60% 0,
            65% 20%, 70% 0, 75% 30%, 80% 0,
            85% 25%, 90% 0, 95% 20%, 100% 0
          );
        }

        /* Tape */
        .paper::before {
          content: "";
          position: absolute;
          top: -14px;
          right: 30px;
          width: 80px;
          height: 28px;
          background: rgba(190,160,120,0.6);
          transform: rotate(-8deg);
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .paper-text {
          font-size: 16px;
          line-height: 1.8;
          text-align: center;
          white-space: pre-line;
          color: #333;
        }

        .next-btn {
          margin-top: 30px;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: #2563eb;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .paper {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  )
}
