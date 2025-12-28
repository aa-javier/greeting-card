import { useEffect } from "react"

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 5000)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <div className="space-bg">
      <h1 className="title">
        Selamat Datang Di Pesan Rahasia ✨
      </h1>
      <p className="subtitle">
        Membuka pesan khusus untukmu…
      </p>

      {/* Stars */}
      <div className="stars"></div>

      {/* Constellation */}
      <svg className="constellation" viewBox="0 0 100 100">
        <circle cx="20" cy="30" r="1.5" />
        <circle cx="40" cy="20" r="1.5" />
        <circle cx="60" cy="35" r="1.5" />
        <circle cx="75" cy="25" r="1.5" />
        <line x1="20" y1="30" x2="40" y2="20" />
        <line x1="40" y1="20" x2="60" y2="35" />
        <line x1="60" y1="35" x2="75" y2="25" />
      </svg>

      {/* Asteroid */}
      <div className="asteroid"></div>

      <style>{`
        .space-bg {
          height: 100vh;
          background: radial-gradient(circle at top, #0b1d3a, #020617);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          text-align: center;
        }

        .title {
          z-index: 3;
          font-size: 28px;
        }

        .subtitle {
          z-index: 3;
          opacity: 0.7;
          margin-top: 6px;
        }

        /* Stars */
        .stars::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1px 1px at 10% 20%, #bfdbfe, transparent),
            radial-gradient(1px 1px at 30% 80%, #bfdbfe, transparent),
            radial-gradient(1px 1px at 50% 50%, #bfdbfe, transparent),
            radial-gradient(1px 1px at 70% 30%, #bfdbfe, transparent),
            radial-gradient(1px 1px at 90% 70%, #bfdbfe, transparent);
          animation: twinkle 3s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        /* Constellation */
        .constellation {
          position: absolute;
          width: 300px;
          height: 300px;
          top: 15%;
          left: 10%;
          stroke: rgba(191,219,254,0.6);
          stroke-width: 0.4;
          fill: #e0f2fe;
          animation: glow 4s infinite alternate;
        }

        @keyframes glow {
          from { opacity: 0.4; }
          to { opacity: 0.9; }
        }

        /* Asteroid */
        .asteroid {
          position: absolute;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #e5e7eb, transparent);
          top: 65%;
          left: -20%;
          animation: fly 4s linear infinite;
        }

        @keyframes fly {
          from { transform: translateX(0); }
          to { transform: translateX(140vw); }
        }

        @media (max-width: 600px) {
          .title { font-size: 22px; }
          .constellation {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  )
}
