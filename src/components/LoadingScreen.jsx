import { useEffect, useState } from "react"

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 500)
          return 100
        }
        return p + 1
      })
    }, 25) // kecepatan loading

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className="loading-screen">
      {/* Bintang */}
      <div className="stars"></div>

      {/* Konten */}
      <div className="content">
        <div className="cat">🐱</div>
        <h1>Selamat Datang Di Pesan Rahasia 🔐</h1>
        <p>Membuka pesan khusus untukmu…</p>
        <div className="percent">{progress}%</div>
      </div>

      <style>{`
        .loading-screen {
          height: 100vh;
          background: radial-gradient(circle at top, #111827, #020617);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          position: relative;
          text-align: center;
        }

        .content {
          z-index: 2;
          padding: 20px;
        }

        .cat {
          font-size: 48px;
          animation: jump 1s infinite ease-in-out;
        }

        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .percent {
          margin-top: 16px;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        /* Bintang */
        .stars::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background: white;
          box-shadow:
            20vw 30vh white,
            40vw 80vh white,
            60vw 50vh white,
            80vw 20vh white,
            10vw 70vh white,
            90vw 90vh white;
          animation: twinkle 2s infinite alternate;
        }

        @keyframes twinkle {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }

        @media (max-width: 600px) {
          h1 { font-size: 22px; }
          .cat { font-size: 40px; }
        }
      `}</style>
    </div>
  )
}
