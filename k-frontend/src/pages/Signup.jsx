import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";



export default function Signup() {
  const [form, setForm]         = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const navigate                = useNavigate();

  const handleSubmit = () => {
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    // TODO: wire up real registration here
    navigate("/");
  };

  const inputBase = {
    width: "100%", boxSizing: "border-box",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 50,
    padding: "16px 22px",
    fontSize: 15, color: "#e8e8e8",
    outline: "none",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    transition: "border-color 0.2s, background 0.2s",
    caretColor: "#c9a96e",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#111010",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      padding: "24px",
    }}>

      {/* Card */}
      <div style={{
        width: "80%", maxWidth: 460,
        height: 600,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        padding: "40px 32px 36px",
        backdropFilter: "blur(10px)",
      }}>

        {/* Dots + Title */}
        <div style={{ textAlign: "center", marginBottom: 150 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
          </div>
          <h1 style={{
            fontSize: 26, fontWeight: 700, color: "#f0f0f0",
            margin: "0 0 15px", letterSpacing: "-0.01em",
          }}>
            Welcome to Kalashala
          </h1>
          <p style={{ fontSize: 13, color: "#555", margin: 0 }}>
            Begin by creating an account
          </p>
        </div>

        {/* Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          <input
            style={inputBase}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            onFocus={e => { e.target.style.borderColor = "rgba(201,169,110,0.45)"; e.target.style.background = "rgba(255,255,255,0.09)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
          />

          <div style={{ position: "relative" }}>
            <input
              style={{ ...inputBase, paddingRight: 52 }}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              onFocus={e => { e.target.style.borderColor = "rgba(201,169,110,0.45)"; e.target.style.background = "rgba(255,255,255,0.09)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
            />
            <button
              onClick={() => setShowPass(s => !s)}
              style={{
                position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer",
                color: "#555", display: "flex", alignItems: "center", padding: 0,
              }}
            >
              {showPass ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p style={{ fontSize: 14, color: "#c0746a", textAlign: "center", marginBottom: 14 }}>{error}</p>
        )}

        {/* Terms */}
        <p style={{ fontSize: 12, color: "#444", textAlign: "center", marginBottom: 24, lineHeight: 1.6 }}>
          By continuing, you agree to our{" "}
          <span style={{ color: "#888", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2 }}>Terms</span>
          {" "}and{" "}
          <span style={{ color: "#888", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2 }}>Privacy Policy</span>
        </p>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%", padding: "17px",
            background: "#f0f0f0", border: "none", borderRadius: 50,
            fontSize: 16, fontWeight: 700, color: "#111",
            cursor: "pointer", fontFamily: "inherit",
            letterSpacing: "0.01em",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "scale(1.01)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          Continue
        </button>

        {/* Login link */}
        <p style={{ textAlign: "center", fontSize: 14, color: "#444", margin: "20px 0 0" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#c9a96e", textDecoration: "underline", textUnderlineOffset: 3 }}>
            Log in
          </Link>
        </p>
      </div>
      
    </div>
  );
}