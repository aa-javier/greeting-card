export default function LoadingScreen({ onFinish }) {
  setTimeout(onFinish, 2500)

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "black",
      color: "white",
      fontSize: 24
    }}>
      Selamat Datang Di Pesan Rahasia 🔐
    </div>
  )
}
