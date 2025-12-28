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
      {/* Stars */}
      <div className="stars"></div>

      {/* Shooting Stars */}
      <div className="shooting shooting1"></div>
      <div className="shooting shooting2"></div>
      <div className="shooting shooting3"></div>

      {/* Asteroid */}
      <div className="asteroid"></div>

      {/* Content */}
      <div className="content">
        <div className="cat">🐱</div>
        <h1>Selamat Datang Di Pesan Rahasia 🔐</h1>
        <p>Membuka pesan khusus untukmu…</p>
        <div className="progress">{progress}%</div>
      </div>

      <style>{`
        .space {
          height: 100vh;
          background: radial-gradient(circle at top, #0f172a, #020617);
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
          padding: 20px;
        }

        .cat {
          font-size: 48px;
          animation: jump 1s infinite ease-in-out;
        }

        @keyframes jump {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        .progress {
          margin-top: 16px;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        /* Stars background */
        .stars::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(2px 2px at 20% 30%, #93c5fd, transparent),
            radial-gradient(2px 2px at 80% 20%, #93c5fd, transparent),
            radial-gradient(1px 1px at 50% 70%, #93c5fd, transparent),
            radial-gradient(1px 1px at 10% 90%, #93c5fd, transparent),
            radial-gradient(2px 2px at 90% 80%, #93c5fd, transparent);
          animation: twinkle 3s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: .3; }
          to { opacity: 1; }
        }

        /* Shooting stars */
        .shooting {
          position: absolute;
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          opacity: 0.8;
          animation: shoot 3s linear infinite;
        }

        .shooting1 { top: 20%; left: -30%; animation-delay: 0s; }
        .shooting2 { top: 50%; left: -40%; animation-delay: 1s; }
        .shooting3 { top: 75%; left: -50%; animation-delay: 2s; }

        @keyframes shoot {
          from { transform: translateX(0) translateY(0); }
          to { transform: translateX(160vw) translateY(40vh); }
        }

        /* Asteroid */
        .asteroid {
          position: absolute;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, #94a3b8, #475569);
          border-radius: 50%;
          top: 30%;
          left: -60px;
          animation: asteroid 6s linear infinite;
          box-shadow: 0 0 20px rgba(148,163,184,0.6);
        }

        @keyframes asteroid {
          from { transform: translateX(0) rotate(0deg); }
          to { transform: translateX(130vw) rotate(720deg); }
        }

        @media (max-width: 600px) {
          h1 { font-size: 22px; }
          .cat { font-size: 40px; }
        }
      `}</style>
    </div>
  )
}
