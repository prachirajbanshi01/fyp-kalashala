import { Menu, X, Search, User, Palette } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchVal.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchVal)}`);
      setSearchVal("");
      setMobileMenuIsOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 50,
      background: "rgba(19, 22, 26, 0.6)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(120,100,80,0.15)",
      opacity: "80%",
      fontFamily: "Helvetica"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 70 }}>

          {/* Hamburger — left */}
          <button
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#ffffff", display: "flex", alignItems: "center", marginRight: 16
            }}
          >
            {mobileMenuIsOpen ? <X size={22} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" style={{
            flexShrink: 0, display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none"
          }}>
            <span style={{ fontSize: 22, fontWeight: 400, color: "#f6f6f6", letterSpacing: "0.05em" }}>
              kalashala
            </span>

          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 32, marginLeft: 32, flex: 1 }}>
            
            <Link to="/explore" style={{
              fontSize: 18, fontWeight: 550, textDecoration: "none",
              color: isActive("/explore") ? "#ffffff" : "#ffffff", transition: "color .2s"
            }}>Explore</Link>
            <Link to="/collections" style={{
              fontSize: 18, fontWeight: 550, textDecoration: "none",
              color: isActive("/explore") ? "#ffffff" : "#ffffff", transition: "color .2s"
            }}>Collections</Link>
            <Link to="/articles" style={{
              fontSize: 18, fontWeight: 550, textDecoration: "none",
              color: isActive("/explore") ? "#ffffff" : "#ffffff", transition: "color .2s"
            }}>Articles</Link>
          </div>

          

          {/* Account */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Link to="/login" style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "#ffffff", textDecoration: "none", fontSize: 14, fontFamily: "helvetica"
            }}>
              <User size={24} />
              <span style={{ fontSize: 18, fontWeight: 550 }}>Login</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div style={{
          background: "#0c0a09", borderBottom: "1px solid rgba(100,80,60,0.2)",
          padding: "12px 20px 24px", animation: "slideDown 0.2s ease"
        }}>
          <Link to="/" onClick={() => setMobileMenuIsOpen(false)} style={{
            display: "block", fontSize: 15, color: "#9e8a74",
            padding: "8px 0", textDecoration: "none", fontFamily: "inherit"
          }}>Home</Link>
          <Link to="/explore" onClick={() => setMobileMenuIsOpen(false)} style={{
            display: "block", fontSize: 15, color: "#9e8a74",
            padding: "8px 0", textDecoration: "none", fontFamily: "inherit"
          }}>Explore</Link>
          <div style={{ position: "relative", paddingTop: 8 }}>
            <Search size={16} style={{
              position: "absolute", left: 10, top: "50%",
              transform: "translateY(-50%)", color: "#6b5c4a", marginTop: 4
            }} />
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              onKeyDown={handleSearch}
              type="text"
              placeholder="Search..."
              style={{
                width: "100%", background: "#1a1410",
                border: "1px solid rgba(100,80,60,0.3)", borderRadius: 8,
                padding: "8px 14px 8px 36px", fontSize: 14,
                color: "#000000", outline: "none", boxSizing: "border-box",
                fontFamily: "helvetica"
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
