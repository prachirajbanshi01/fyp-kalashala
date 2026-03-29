import { useLocation, useNavigate } from "react-router-dom";
import { Search, Palette } from "lucide-react";

const allArtworks = [
  { title: "Solitude in Gold", artist: "Meera Rathi", category: "Oil on Canvas", color: "#c9a96e" },
  { title: "Monsoon Memory", artist: "Arjun Nair", category: "Watercolour", color: "#7c9ea8" },
  { title: "The Weaver's Hands", artist: "Priya Sen", category: "Digital Art", color: "#a87c6e" },
  { title: "Nocturne III", artist: "Kabir Desai", category: "Charcoal", color: "#6e7ca8" },
  { title: "Festival of Light", artist: "Sunita Rao", category: "Acrylic", color: "#a8966e" },
  { title: "River Song", artist: "Dev Sharma", category: "Pastel", color: "#7ca87c" },
  { title: "Ancient Echoes", artist: "Riya Bose", category: "Oil on Canvas", color: "#a87c9e" },
  { title: "Himalayan Dusk", artist: "Vikram Joshi", category: "Watercolour", color: "#9ea87c" },
];

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q") || "";

  const results = query
    ? allArtworks.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.artist.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      )
    : allArtworks;

  return (
    <div style={{
      minHeight: "100vh", background: "#0c0a09", color: "#e8d5b7",
      fontFamily: "'Cormorant Garamond', Georgia, serif", paddingTop: 80
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <Search size={18} color="#6b5c4a" />
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 700, color: "#f0e0c4", margin: 0 }}>
              {query ? `Results for "${query}"` : "All Artworks"}
            </h1>
          </div>
          <p style={{ fontSize: 14, color: "#6b5c4a", margin: 0 }}>
            {results.length} {results.length === 1 ? "artwork" : "artworks"} found
          </p>
        </div>

        {results.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: "rgba(180,130,60,0.08)", border: "1px solid rgba(180,130,60,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px"
            }}>
              <Search size={32} color="#6b5c4a" />
            </div>
            <h2 style={{ fontSize: 22, color: "#8a7560", fontWeight: 600, marginBottom: 12 }}>No results found</h2>
            <p style={{ color: "#6b5c4a", fontSize: 15, marginBottom: 28 }}>
              Try a different search term or browse the full gallery.
            </p>
            <button
              onClick={() => navigate("/")}
              style={{
                background: "linear-gradient(135deg, #c9a96e 0%, #8b6a3e 100%)",
                border: "none", borderRadius: 10, padding: "12px 28px",
                fontSize: 15, color: "#1a1208", fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit"
              }}
            >Back to Home</button>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20
          }}>
            {results.map((art, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(30,22,14,0.6)", border: "1px solid rgba(100,80,60,0.15)",
                  borderRadius: 16, overflow: "hidden", cursor: "pointer",
                  transition: "transform 0.25s, border-color 0.25s"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(180,130,60,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(100,80,60,0.15)";
                }}
              >
                <div style={{
                  height: 200,
                  background: `linear-gradient(135deg, ${art.color}22 0%, ${art.color}44 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative"
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: `${art.color}33`, border: `2px solid ${art.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Palette size={22} color={art.color} />
                  </div>
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: "rgba(12,10,9,0.7)", borderRadius: 6,
                    padding: "4px 10px", fontSize: 11, color: "#9e8a74"
                  }}>{art.category}</div>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#e8d5b7", margin: "0 0 4px" }}>{art.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b5c4a", margin: 0 }}>{art.artist}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
