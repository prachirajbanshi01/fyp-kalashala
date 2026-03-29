import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [form, setForm]         = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [hovered, setHovered]   = useState(null);
  const navigate                = useNavigate();

  const handleSubmit = () => {
    setError("");
    if (!form.email || !form.password) { setError("Please fill in all fields."); return; }
    // TODO: wire up real auth
    navigate("/");
  };

  const inputBase = {
    width: "100%", boxSizing: "border-box",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: 50, padding: "15px 22px",
    fontSize: 15, color: "#e8e8e8", outline: "none",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' ,
    transition: "border-color 0.2s, background 0.2s",
    caretColor: "#c9a96e",
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      background: "#0e0d0c",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      overflow: "hidden",
    }}>

      {/* ══ LEFT — artwork mosaic ══════════════════════════════════════ */}
      <div style={{
        flex: 1, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        minWidth: 0,
      }}
        className="login-left"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "150%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            filter: "grayscale(0.5) brightness(0.8)",
          }}
        >
          <source src="/rath.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Branding overlay in centre of image side */}
        <div style={{
          position: "relative", zIndex: 2, textAlign: "center", padding: "0 32px",
        }}>
          <p style={{ fontSize: 11, letterSpacing: "0.28em", color: "#c9a96e", textTransform: "uppercase", marginBottom: 14 }}>
            FOR · THE · CULTURE
          </p>
          
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.3s ease"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h2 style={{
              fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 700,
              color: "#ffffff", margin: "0 0 10px", letterSpacing: "-0.02em",
              textShadow: "0 2px 24px rgba(0,0,0,0.7)",
            
            }}>
              Kalashala
            </h2>
          </Link>
          <p style={{ fontSize: 15, fontStyle: "italic", color: "#c9a96e", margin: 0 }}>
            bridging art, artists and you
          </p>
        </div>
      </div>

      {/* 1. DIVIDER ════════════════════════════════════════════════════ */}
      <div style={{
        width: 1, alignSelf: "stretch",
        background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(201,169,110,0.25) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)",
        flexShrink: 0,
      }} />

      {/* 2. RIGHT — login card ════════════════════════════════════════ */}
      <div style={{
        width: 800, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "48px 40px",
        background: "#0e0d0c",
      }}>
        <div style={{ width: "60%" }}>

          {/* Logo + heading */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }} />
            <h1 style={{
              fontSize: 28, fontWeight: 700, color: "#f0f0f0",
              margin: "0 0 10px", letterSpacing: "-0.01em",
            }}>
              Log in
            </h1>
            <p style={{ fontSize: 16, color: "#555", margin: 0 }}>
              or{" "}
              <Link to="/signup" style={{ color: "#c9a96e", textDecoration: "underline", textUnderlineOffset: 3 }}>
                create an account
              </Link>
            </p>
          </div>

          {/* Inputs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20, }}>
            <input
              style={inputBase}
              type="text"
              placeholder="Email or username"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              onFocus={e => { e.target.style.borderColor = "rgba(201,169,110,0.5)"; e.target.style.background = "rgba(255,255,255,0.08)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
            />
            <div style={{ position: "relative" }}>
              <input
                style={{ ...inputBase, paddingRight: 52 }}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                onFocus={e => { e.target.style.borderColor = "rgba(201,169,110,0.5)"; e.target.style.background = "rgba(255,255,255,0.08)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
              />
              <button
                onClick={() => setShowPass(s => !s)}
                style={{
                  position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer",
                  color: "#555", display: "flex", alignItems: "center", padding: 0,
                }}
              >
                {showPass ? <Eye size={17} /> : <EyeOff size={17} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p style={{ fontSize: 14, color: "#c0746a", textAlign: "center", marginBottom: 14 }}>{error}</p>
          )}

          {/* Enter button */}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%", padding: "16px",
              background: "#f0f0f0", border: "none", borderRadius: 50,
              fontSize: 18, fontWeight: 700, color: "#111",
              cursor: "pointer", fontFamily: "inherit",
              letterSpacing: "0.01em", marginBottom: 18,
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "scale(1.015)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Enter
          </button>

          {/* Forgot */}
          <p style={{ textAlign: "center", fontSize: 14, color: "#555", margin: 0 }}>
            <span
              style={{ cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#888"}
              onMouseLeave={e => e.currentTarget.style.color = "#555"}
            >
              Forgot password?
            </span>
          </p>
        </div>
      </div>

      <style>{
        `@media (max-width: 680px) {
          .login-left { display: none !important; }
        }
      `}</style>
    </div>
  );
}