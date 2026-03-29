import React, { useState, useEffect } from "react";
import { ArrowRight, Eye, Sparkles, ChevronRight, Palette } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const artworks = [
  { title: "OLD MASTERS", image: "/lakshyaChaitya.jpg"},
  { title: "MODERN ART", image: "/modern.jpg"  },
  { title: "CONTEMPORARY ART", image: "/contemporary.jpg" },
  
]  

const galleries = [
  { title: "Green Tara", artist: "Samundra Man Singh Shrestha", image: "/green-tara.jpg", height: "400px"},
  { title: "Prajnaparamita", artist: "Lok Chitrakar", image: "/prajna.jpg", height: "350px"},
  { title: "Mithila", artist: "S.C. Suman", image: "/mithila.jpg", height: "450px"},
  { title: "THE VARIABLE GEM", artist: "Erina Tamrakar", image: "/the-variable-gem.jpg", height: "360px"},
  { title: "UNION IN DESTRUCTION", artist: "Asha Dangol", image: "/union-in-destruction.jpg", height: "450px"},
  { title: "WHEEL OF LIFE", artist: "Prakash Pun Magar", image: "/wheel-of-life.jpg", height: "325px"},
  { title: "CHARIOT", artist: "Sushila Singh", image: "/chariot.jpg", height: "450px"},
  { title: "VASUDHARA", artist: "Ritesh Shahi", image: "/vasudhara.jpg", height: "400px"},
  { title: "Samyak Dyo", artist: "Gopal Kalapremi Shrestha", image: "/samyak.jpg", height: "450px"},
  
  { title: "VISHNU", artist: "Abhijeet Prajapati", image: "/vishnuVikrant.jpg", height: "300px"},
  { title: "LAKSHYA CHAITYA", artist: "Unknown", image: "/lakshyaChaitya.jpg", height: "450px"},
  { title: "Harmony", artist: "Gopal Kalapremi Shrestha", image: "/harmony.jpg", height: "400px"},


]

export default function Home() {
  const [offset, setOffset ] = useState(0);
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculation of text fade-out
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -300])

  return (
    <div style={{
      minHeight: "100vh", background: "#0c0a09",
      color: "#ffffff",
      
    }}>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "150vh", width: "100%", 
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        position: "relative",
        /* Background Logic */
        backgroundImage: `linear-gradient(to bottom, rgba(12, 10, 9, 0.4), rgba(12, 10, 9, 0.95)), url('/ragamala.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll", // Optional: creates a parallax scrolling effect
        backgroundRepeat: "no-repeat"
      }}>

        <div style={{
          position: "absolute",
          top: "150px", 
          maxWidth: "800px",
          zIndex: 10,
          padding: "0 20px"
        }}>
          <div style={{
            background: "linear-gradient(to right, #ffffff,)",
            opacity: "100%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "100px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            boxShadow: "0 10px 50px rgba(230, 226, 226, 0.3)",
            backdropFilter: "blur(10px)" // Gives it that modern "glass" look
          }}>  
            <div style={{ display: "flex", alignItems: "center" }}>
            <input 
              type="text" 
              placeholder="Search Kalashala..." 
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#000000",
                fontSize: "22px",
                fontFamily: "helvetica"
              }}
              />
            </div>
        </div>
    </div>

    
    <div style={{
      transform: `translateY(${offset * 0.2}px)`, // Moves text at 40% scroll speed
      opacity: 1 - offset / 500, // Gradually fades out as you scroll down
      transition: "transform 0.1s ease-out", // Smooths the movement
      zIndex: 2
    }}>

      <h1 style={{
        fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 500, lineHeight: 1.1,
        marginBottom: "1rem", letterSpacing: "-0.02em", color: "#f0e0c4"
      }}>
        Kalashala
        <span className="block mt-2" style={{
          fontSize: 32, color: "#c9a96e", marginBottom: "5rem", fontStyle: "italic" }}>
          bridging art, artists and you
        </span>
      </h1>
      <p className="font-serif text-white max-w-[520px] leading-[1.7]" style={{fontSize: 22, fontWeight: 500, marginBottom: "7rem"}}>
        DISCOVER THEMATIC PRESENTATIONS OF NEPALESE ART
      </p>
 
    </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, #ffffff 0%, #8b6a3e 100%)",
            border: "none", borderRadius: 8, padding: "14px 28px",
            fontSize: 18, color: "#1a1208", fontWeight: 520, cursor: "mouse",
            letterSpacing: "0.01em"
          }}
        >
          EXPLORE
        </button>

        <button
          onClick={() => navigate("/explore")}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, #ffffff 0%, #8b6a3e 100%)",
            border: "none", borderRadius: 8, padding: "14px 28px",
            fontSize: 18, color: "#1a1208", fontWeight: 520, cursor: "mouse",
            letterSpacing: "0.01em"
          }}
        >
            VIEW GALLERY
        </button>
      </div> 
      </section>

      {/* ── Featured Grid ── */}
      <section style={{ 
        padding: "80px 24px", maxWidth: 1400, 
        margin: "0 auto", 
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' 
        }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <p style={{ fontSize: 24, fontWeight: 500, color: "#ffffff", marginBottom: 8, letterSpacing: "0.1em"}}>CURATED SELECTION</p>
          </div>
          <span
            onClick={() => navigate("/explore")}
            style={{ display: "flex", alignItems: "center", gap: 6, color: "#ffffff", fontSize: 16, cursor: "pointer" }}
          >
            View all <ChevronRight size={22} />
          </span>
        </div>
          <div style={{
            width: "100%",
            height: "3px",
            background: "#ffffff", // Subtle white line
            marginBottom: "40px" // Space between the line and the artworks
          }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          background: "transparent",

        }}>
          {artworks.slice(0,3).map((art, i) => (
            <div
              key={i}
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: 10, overflow: "hidden", cursor: "pointer",
                transition: "transform 0.25s ease",
                position: "relative"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(100,80,60,0.15)";
              }}
            >
              <div style={{ padding: "16px 20px"}}>
                <h3 style={{ 
                  fontSize: 30, fontWeight: 400, 
                  color: "#ffffff", margin: "0 0 4px" 
                }}>
                  {art.title}
                </h3>
                
              </div>

              {/* Artwork Image Container */}
              <div style={{
                height: 400, // Taller for a more gallery feel
                width: "100%",
                background: `url(${art.image})`,
                backgroundSize: "cover",
                position: "relative"
                
              }}>
              </div>

              
            </div>
          ))}
        </div>
      </section>

      {/* ── THE COLLECTION GALLERY ── */}
      <section style={{ 
        padding: "80px 40px 50px", 
        maxWidth: 1400, 
        margin: "auto", 
        marginRight: "auto",
        width: "100%",
        
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' 
      }}>
        
        {/* Header: Title - Collection */}
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 550, 
            color: "#ffffff", 
            margin: 0,
            letterSpacing: "0.1em" 
          }}>
            COLLECTION
          </h2>
        </div>

        {/* Line separator */}
        <div style={{
          width: "100%",
          height: "1px",
          background: "rgba(255, 255, 255, 0.1)", 
          marginBottom: "50px" 
        }} />

        {/* ── SINGLE UNIFIED GALLERY DIV ── */}
        <div style={{
          display: "grid",
          // This creates the gallery flow: as many 300px columns as fit
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "10px 30px"// 60px vertical gap to give the names breathing room
          //alignItems: "start"
        }}>

          {/* Masonry Wrap */}
          <div style={{
            columnCount: 4, // Number of columns (adjust for mobile/desktop)
            columnGap: "25px", // Horizontal gap
            width: "430%",
            display: "block"
          }}>
          
          {galleries.map((gallery, i) => (
            <React.Fragment key={i}>
              {/* Individual Item within the shared Grid */}
              <div style={{ 
                margin: "auto",
                breakInside: "avoid",
                marginBottom: "35px",
                position: "relative",
                overflow: "hidden", 
                cursor: "pointer",
                background: "#1a1614"
                }}    
                // Handled hover via the parent div for a smoother experience
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img');
                const box = e.currentTarget.querySelector('.info-box');
                img.style.transform = "scale(1.05)";
                img.style.filter = "brightness(0.8)";
                box.style.opacity = "1";
                box.style.transform = "translateY(0)";
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img');
                const box = e.currentTarget.querySelector('.info-box');
                img.style.transform = "scale(1)";
                img.style.filter = "brightness(1)";
                box.style.opacity = "0";
                box.style.transform = "translateY(10px)";
              }}
              >
              {/* THE IMAGE */}
              <img 
                src={gallery.image} 
                alt={gallery.title}
                style={{
                  width: "100%",
                  height: gallery.height || "450px", 
                  display: "inline-block",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)", // Smoother transition
                }}
              />

              {/* ── TRANSPARENT BOX (BOTTOM-LEFT) ── */}
                <div 
                  className="info-box" // Class name for the JS hover selector above
                  style={{ 
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",      // <--- CHANGED TO LEFT
                    background: "rgba(0, 0, 0, 0.01)", 
                    backdropFilter: "blur(8px)",      
                    padding: "14px",
                    borderRadius: "4px", // Sharp, museum-style edges
                    //borderLeft: "3px solid #c9a96e", // Added a gold accent line on the left
                    //pointerEvents: "none",            
                    opacity: 0,                       
                    transform: "translateY(10px)",    
                    transition: "all 0.4s ease-out",
                    textAlign: "left"  // <--- CHANGED TO LEFT
                  }}
                >
                  <p style={{ 
                    fontSize: "14px", 
                    fontWeight: 500, 
                    color: "#ffffff", 
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em"
                  }}>
                    {gallery.title}
                  </p>
                  
                </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
        </div>
      </section>
      
      {/* ── CTA Banner ── */}
      <section style={{
        margin: "60px 180px", borderRadius: 12,
        width: "80%",
        background: "rgba(255, 255, 255, 0.05)", // Very light transparent white
        backdropFilter: "blur(20px) saturate(180%)", // The "Frosted" effect + color boost
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        padding: "80px 48px", textAlign: "center",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' 

      }}>

        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 600, color: "#ffffff", marginBottom: 16 }}>
          Are you an artist?
        </h2>
        <p style={{ color: "#ffffff", fontSize: 16, marginBottom: 32, maxWidth: 450, margin: "0 auto 32px" }}>
          Share your work with thousands of art lovers. Join Kalashala and let your art speak.
        </p>
        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "linear-gradient(135deg, #c9a96e 0%, #8b6a3e 100%)",
            border: "none", borderRadius: 10, padding: "14px 32px",
            fontSize: 15, color: "#1a1208", fontWeight: 700, cursor: "pointer",
            
          }}
        >Join as Artist</button>
      </section>


      {/* ── Footer ── */}
      <footer style={{
        borderTop: "2px solid rgba(100,80,60,0.12)",
        padding: "24px", textAlign: "center", color: "#ffffff", fontSize: 16
      }}>
        © 2025 Kalashala · All rights reserved
      </footer>
    </div>
  );
}