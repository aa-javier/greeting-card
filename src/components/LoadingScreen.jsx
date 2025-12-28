export default function LoadingScreen({ onFinish }) {
  setTimeout(onFinish, 3000)

  return (
    <div className="space-bg">
      <h1 className="title">A Message Written in the Stars ✨</h1>
      <div className="stars"></div>
      <div className="asteroid"></div>

      <style>{`
        .space-bg {
          height: 100vh;
          background: radial-gradient(circle, #020024, #000);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .title { z-index: 2; text-align: center; }
        .stars::after {
          content: '';
          width: 2px;
          height: 2px;
          background: white;
          box-shadow: 100px 200px white, 200px 400px white, 300px 100px white;
          position: absolute;
          animation: twinkle 2s infinite;
        }
        .asteroid {
          width: 50px;
          height: 3px;
          background: white;
          position: absolute;
          top: 30%;
          animation: fly 3s infinite;
        }
        @keyframes fly {
          from { left: -50px; }
          to { left: 110%; }
        }
      `}</style>
    </div>
  )
}
