const CATEGORIES = [
  {
    key: "keluarga",
    title: "Keluarga",
    subtitle: "Pesan untuk keluarga",
    image: "/media/keluarga.jpg"
  },
  {
    key: "teman",
    title: "Teman",
    subtitle: "Pesan untuk teman",
    image: "/media/teman.jpg"
  },
  {
    key: "sahabat",
    title: "Sahabat",
    subtitle: "Pesan untuk sahabat",
    image: "/media/sahabat.jpg"
  },
  {
    key: "pacar",
    title: "Pacar",
    subtitle: "Pesan penuh rasa",
    image: "/media/pacar.jpg"
  },
  {
    key: "hts",
    title: "HTS",
    subtitle: "Pesan yang menggantung",
    image: "/media/hts.jpg"
  },
  {
    key: "mantan",
    title: "Mantan",
    subtitle: "Pesan yang tertinggal",
    image: "/media/mantan.jpg"
  }
]

export default function CategoryMenu({ onSelect }) {
  return (
    <div className="container">
      <h2 style={{ marginBottom: 20 }}>Pilih Kategori</h2>

      <div className="list">
        {CATEGORIES.map(c => (
          <div
            key={c.key}
            className="card"
            onClick={() => onSelect(c.key)}
          >
            {/* Salju */}
            <div className="snow"></div>

            {/* Konten */}
            <img src={c.image} alt={c.title} className="icon" />

            <div className="text">
              <div className="title">{c.title}</div>
              <div className="subtitle">{c.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          background: #0f172a;
          border-radius: 18px;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          transition: transform 0.2s ease;
        }

        .card:active {
          transform: scale(0.97);
        }

        /* Salju */
        .snow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 22px;
          background:
            radial-gradient(circle at 10% 100%, #fff 60%, transparent 61%),
            radial-gradient(circle at 30% 100%, #fff 60%, transparent 61%),
            radial-gradient(circle at 50% 100%, #fff 60%, transparent 61%),
            radial-gradient(circle at 70% 100%, #fff 60%, transparent 61%),
            radial-gradient(circle at 90% 100%, #fff 60%, transparent 61%);
        }

        .icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          object-fit: cover;
          background: #020617;
        }

        .text {
          display: flex;
          flex-direction: column;
        }

        .title {
          font-size: 16px;
          font-weight: 600;
        }

        .subtitle {
          font-size: 13px;
          opacity: 0.7;
        }

        @media (max-width: 600px) {
          .icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}
