import { useState } from "react"

const PIN_MAP = {
  keluarga: "1",
  teman: "2",
  sahabat: "3",
  pacar: "4",
  hts: "5",
  mantan: "6"
}

const PIN_TEXT = {
  keluarga: {
    title: "Masukkan PIN Keluarga",
    warning: "PERINGATAN!!!",
    desc: "Hanya Anggota Keluarga\nYang Mengetahui Akses Key."
  },
  teman: {
    title: "Masukkan PIN Teman",
    warning: "INFO",
    desc: "Pesan ini hanya untuk\nTeman Terdekat."
  },
  sahabat: {
    title: "Masukkan PIN Sahabat",
    warning: "KHUSUS",
    desc: "Akses terbatas untuk\nSahabat Sejati."
  },
  pacar: {
    title: "Masukkan PIN Pacar ❤️",
    warning: "RAHASIA",
    desc: "Pesan pribadi khusus\nUntuk Orang Tersayang."
  },
  hts: {
    title: "Masukkan PIN HTS",
    warning: "PERHATIAN",
    desc: "Hubungan tidak jelas\nAkses juga terbatas."
  },
  mantan: {
    title: "Masukkan PIN Mantan 💔",
    warning: "PERINGATAN KERAS",
    desc: "Membuka pesan ini\nMungkin Mengundang Kenangan."
  }
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

  const text = PIN_TEXT[category]

  return (
    <div className="container">
      <button onClick={onBack} style={{ marginBottom: 20 }}>
        ← Kembali
      </button>

      <h2>{text.title}</h2>

      <div
        style={{
          marginTop: 16,
          padding: 14,
          borderRadius: 12,
          background: "rgba(255,0,0,0.1)",
          border: "1px solid rgba(255,0,0,0.3)"
        }}
      >
        <strong style={{ color: "#f87171" }}>
          {text.warning}
        </strong>
        <p
          style={{
            marginTop: 6,
            whiteSpace: "pre-line",
            opacity: 0.85
          }}
        >
          {text.desc}
        </p>
      </div>

      <input
        type="password"
        maxLength={4}
        value={pin}
        onChange={e => setPin(e.target.value)}
        style={{
          marginTop: 24,
          fontSize: 24,
          padding: 12,
          width: "100%",
          maxWidth: 220,
          textAlign: "center",
          borderRadius: 10,
          border: "none"
        }}
      />

      <button
        onClick={submit}
        style={{ marginTop: 20 }}
      >
        Buka Pesan
      </button>

      {error && (
        <p style={{ color: "#f87171", marginTop: 10 }}>
          PIN salah ❌
        </p>
      )}
    </div>
  )
}
