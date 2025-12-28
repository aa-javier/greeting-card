const ZODIACS = ["pisces", "aries", "taurus"]

export default function ZodiacMenu({ onSelect }) {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Pilih Zodiak Kamu 🌙</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {ZODIACS.map(z => (
          <div key={z} onClick={() => onSelect(z)} style={{ cursor: "pointer" }}>
            <img
              src={`/media/zodiac/${z}.png`}
              alt={z}
              width={100}
            />
            <p>{z.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
