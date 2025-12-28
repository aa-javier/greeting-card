import { useState, useRef } from "react"

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
  const [pin, setPin] = useState(["", "", "", ""])
  const [error, setError] = useState(false)
  const inputs = useRef([])

  function handleChange(value, index) {
    if (!/^\d?$/.test(value)) return

    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)
    setError(false)

    if (value && index < 3) {
      inputs.current[index + 1].focus()
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputs.current[index - 1].focus()
    }
  }

  function submit() {
    const enteredPin = pin.join("")
    if (enteredPin === PIN_MAP[category]) {
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

      {/* OTP PIN BOX */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 28
        }}
      >
        {pin.map((digit, i) => (
          <input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            type="password"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            style={{
              width: 50,
              height: 56,
              fontSize: 28,
              textAlign: "center",
              borderRadius: 12,
              border: error ? "2px solid #f87171" : "none",
              background: "#fff",
              color: "#000"
            }}
          />
        ))}
      </div>

      <button
        onClick={submit}
        style={{ marginTop: 24 }}
      >
        Buka Pesan
      </button>

      {error && (
        <p style={{ color: "#f87171", marginTop: 12 }}>
          PIN salah ❌
        </p>
      )}
    </div>
  )
}
