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
      <div className="meteor m1"></div>
      <div className="meteor m2"></div>
      <div className="meteor m3"></div>
      <div className="meteor m4"></div>
      <div className="meteor m5"></div>

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

        /* Meteor rain */
        .meteor {
          position: absolute;
          width: 160px;
          height: 2px;
          background: linear-gradient(270deg, #e0f2fe, transparent);
          opacity: 0.8;
          animation: rain 2.8s linear infinite;
          transform: rotate(-45deg);
        }

        .m1 { top: -10%; left: 110%; animation-delay: 0s; }
        .m2 { top: 10%; left: 120%; animation-delay: .4s; }
        .m3 { top: 30%; left: 130%; animation-delay: .8s; }
        .m4 { top: 50%; left: 140%; animation-delay: 1.2s; }
        .m5 { top: 70%; left: 150%; animation-delay: 1.6s; }

        @keyframes rain {
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
