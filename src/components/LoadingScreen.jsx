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
      {/* Background stars */}
      <div className="stars"></div>

      {/* Shooting stars */}
      <div className="meteor m1"></div>
      <div className="meteor m2"></div>
      <div className="meteor m3"></div>

      {/* Content */}
      <div className="content">
        <h1>Selamat Datang Di Pesan Rahasia 🔐</h1>
        <p>Membuka pesan khusus untukmu…</p>

        {/* Progress bar */}
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
          background: radial-gradient(circle at top, #0b1d3a, #020617);
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

        h1 {
          margin-bottom: 6px;
        }

        p {
          opacity: 0.75;
          margin-bottom: 24px;
        }

        /* Progress */
        .progress-wrapper {
          position: relative;
          height: 10px;
          background: rgba(255,255,255,0.15);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #60a5fa);
          border-radius: 999px;
          transition: width 0.2s ease;
        }

        .cat {
          position: absolute;
          top: -26px;
          font-size: 26px;
          transition: left 0.2s ease;
          pointer-events: none;
        }

        .percent {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        /* Stars */
        .stars::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1px 1px at 10% 20%, #bfdbfe, transparent),
            radial-gradient(2px 2px at 30% 80%, #bfdbfe, transparent),
            radial-gradient(1px 1px at 70% 40%, #bfdbfe, transparent),
            radial-gradient(2px 2px at 90% 10%, #bfdbfe, transparent),
            radial-gradient(1px 1px at 50% 60%, #bfdbfe, transparent);
          animation: twinkle 3s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }

        /* Meteors */
        .meteor {
          position: absolute;
          width: 140px;
          height: 2px;
          background: linear-gradient(90deg, #e0f2fe, transparent);
          opacity: 0.9;
          animation: shoot 3s linear infinite;
        }

        .m1 { top: 20%; left: -40%; animation-delay: 0s; }
        .m2 { top: 50%; left: -50%; animation-delay: 1.2s; }
        .m3 { top: 75%; left: -60%; animation-delay: 2.4s; }

        @keyframes shoot {
          from { transform: translateX(0) translateY(0); }
          to { transform: translateX(160vw) translateY(50vh); }
        }

        @media (max-width: 600px) {
          h1 { font-size: 22px; }
          .cat { font-size: 22px; }
        }
      `}</style>
    </div>
  )
}
