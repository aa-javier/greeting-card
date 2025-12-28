export default function LoadingScreen({ onFinish }) {
  setTimeout(onFinish, 2500)

  return (
    <div className="container" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <h1>Selamat Datang Di Pesan Rahasia 🔐</h1>
      <p style={{ opacity: 0.7 }}>Membuka pesan khusus untukmu…</p>
    </div>
  )
}
