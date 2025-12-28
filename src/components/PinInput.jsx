import { useState } from "react"

const PIN_MAP = {
  keluarga: "1",
  teman: "2",
  sahabat: "3",
  pacar: "4",
  hts: "5",
  mantan: "6"
}

export default function PinInput({ category, onBack, onSuccess }) {
  const [pin, setPin] = useState("")
  const [error, setError] = useState(false)

  function submit() {
    if (pin === PIN_MAP[category]) {
      onSuccess()
    } else {
      setError(true)
    }
  }

  return (
    <div className="container">
      <button onClick={onBack}>← Kembali</button>
      <h2>Masukkan PIN</h2>

      <input
        type="password"
        maxLength={4}
        value={pin}
        onChange={e => setPin(e.target.value)}
        style={{
          fontSize: 24,
          padding: 10,
          margin: "20px auto",
          width: "100%",
          maxWidth: 200,
          textAlign: "center"
        }}
      />

      <button onClick={submit}>Buka Pesan</button>
      {error && <p style={{ color: "red" }}>PIN salah ❌</p>}
    </div>
  )
}
