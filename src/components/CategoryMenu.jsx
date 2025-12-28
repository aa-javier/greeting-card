const CATEGORIES = [
  "keluarga",
  "teman",
  "sahabat",
  "pacar",
  "hts",
  "mantan"
]

export default function CategoryMenu({ onSelect }) {
  return (
    <div className="container">
      <h2>Pilih Kategori</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 12,
        marginTop: 20
      }}>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => onSelect(c)}>
            {c.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
