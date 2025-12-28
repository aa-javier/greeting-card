import { useEffect, useState } from "react"

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 600)
          return 100
        }
        return p + 1
      })
    }, 25)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className="space">
      {/* Star Rain */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            animationDelay: `${Math.random() * 5}s`,
            top: `${Math.random() * -100}px`,
            left: `${50 + Math.random() * 100}%`
          }}
        />
      ))}

      {/* Content */}
      <div className="content">
        <h1>Selamat Datang Di Pesan Rahasia 🔐</h1>
        <p>Membuka pesan khusus untukmu…</p>

        <div className="progress-wrapper">
          <div
            className="cat"
            style={{ left: `calc(${progress}% - 18px)` }}
          >
            🐱
          </div>
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="percent">{progress}%</div>
      </div>

      <style>{`
        .space {
          height: 100vh;
          background: radial-gradient(circle at top right, #0b1d3a, #020617);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          position: relative;
          text-align: center;
        }

        .content {
          z-index: 5;
          width: 100%;
          max-width: 420px;
          padding: 20px;
        }

        p { opacity: 0.75; }

        /* Progress */
        .progress-wrapper {
          position: relative;
          height: 10px;
          background: rgba(255,255,255,0.15);
          border-radius: 999px;
          overflow: hidden;
          margin: 20px 0 10px;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #60a5fa);
          border-radius: 999px;
        }

        .cat {
          position: absolute;
          top: -26px;
          font-size: 26px;
          transition: left 0.2s linear;
        }

        .percent {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        /* Star rain */
        .star {
          position: absolute;
          width: 2px;
          height: 14px;
          background: linear-gradient(180deg, #bfdbfe, transparent);
          opacity: 0.8;
          animation: fall 3.5s linear infinite;
          transform: rotate(-45deg);
        }

        @keyframes fall {
          from {
            transform: translate(0, 0) rotate(-45deg);
            opacity: 1;
          }
          to {
            transform: translate(-160vw, 160vh) rotate(-45deg);
            opacity: 0;
          }
        }

        @media (max-width: 600px) {
          h1 { font-size: 22px; }
          .cat { font-size: 22px; }
        }
      `}</style>
    </div>
  )
}
