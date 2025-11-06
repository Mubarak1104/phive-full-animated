import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const [view, setView] = useState("main"); // "main", "clubs", or "schedule"

  const media = [
       { type: "image", src: "/assets/images/img1.jpg" },
    { type: "image", src: "/assets/images/img2.jpg" },
    { type: "video", src: "/assets/videos/gym1.mp4" },
    { type: "image", src: "/assets/images/img3.jpg" },
    { type: "video", src: "/assets/videos/gym2.mp4" },
    { type: "image", src: "/assets/images/img4.jpg" },
    { type: "image", src: "/assets/images/img5.jpg" },
    { type: "video", src: "/assets/videos/gym3.mp4" },
    { type: "image", src: "/assets/images/img6.jpg" },
    { type: "image", src: "/assets/images/img7.jpg" },
    { type: "image", src: "/assets/images/img9.jpg" },
    { type: "image", src: "/assets/images/img8.jpg" },
  ];

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#14100B",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#FFD400",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence mode="wait">
        {view === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", width: "100%" }}
          >
            {/* === Floating Media Grid === */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "10px",
                width: "90%",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {media.map((item, i) => (
                <FloatingMedia key={i} {...item} delay={i * 0.2} />
              ))}
            </div>

            {/* === Center Text === */}
            {/* <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                color: "#FFD400",
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(60px, 10vw, 160px)",
                textShadow: "0 3px 15px rgba(0,0,0,0.7)",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              PHIVE
            </motion.h1> */}

            {/* === Buttons === */}
            <div style={{ marginTop: "40px", zIndex: 5 }}>
              <button
                onClick={() => setView("clubs")}
                style={{
                  background: "#FFD400",
                  border: "none",
                  padding: "12px 32px",
                  margin: "0 10px",
                  borderRadius: "40px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                VIEW ALL CLUBS
              </button>
              <button
                onClick={() => setView("schedule")}
                style={{
                  background: "transparent",
                  border: "2px solid #FFD400",
                  color: "#FFD400",
                  padding: "12px 32px",
                  margin: "0 10px",
                  borderRadius: "40px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                SCHEDULE A VISIT
              </button>
            </div>
          </motion.div>
        )}
        {/* === Info Section === */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    marginTop: "60px",
    border: "1px solid #FFD400",
    width: "90%",
    maxWidth: "1000px",
    textAlign: "center",
    zIndex: 5,
  }}
>
  {/* Title */}
  <div
    style={{
      borderBottom: "1px solid #FFD400",
      padding: "15px 10px",
      fontWeight: "bold",
      fontFamily: "Anton, sans-serif",
      color: "#FFD400",
      letterSpacing: "1px",
    }}
  >
    WHAT YOU CAN FIND AT PHIVE CLUBS
  </div>

  {/* Features */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      borderTop: "1px solid #FFD400",
      color: "#FFD400",
      fontSize: "12px",
      textTransform: "uppercase",
    }}
  >
    {[
      "Heated Indoor Swimming Pool",
      "Sauna, Turkish Bath and Jacuzzi",
      "Weight and Cardio Room",
      "Private Pilates Studio",
      "Group Classes",
    ].map((item, i) => (
      <div
        key={i}
        style={{
          borderRight: i !== 4 ? "1px solid #FFD400" : "none",
          padding: "20px 10px",
          lineHeight: "1.4",
        }}
      >
        <strong>{item}</strong>
      </div>
    ))}
  </div>
</motion.div>

        {/* === VIEW ALL CLUBS (scrolling videos) === */}
        {view === "clubs" && (
          <motion.div
            key="clubs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              height: "100vh",
              overflowY: "scroll",
              scrollSnapType: "y mandatory",
            }}
          >
            {["gym1.mp4", "gym2.mp4", "gym3.mp4"].map((vid, i) => (
              <div
                key={i}
                style={{
                  height: "100vh",
                  scrollSnapAlign: "start",
                  position: "relative",
                }}
              >
                <video
                  src={`/assets/videos/${vid}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}

            <button
              onClick={() => setView("main")}
              style={{
                position: "fixed",
                top: 20,
                right: 20,
                background: "#FFD400",
                border: "none",
                padding: "10px 24px",
                borderRadius: "30px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⬅ BACK
            </button>
          </motion.div>
        )}

        {/* === SCHEDULE A VISIT (form) === */}
        {view === "schedule" && (
          <motion.div
            key="schedule"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "#FFD400",
              color: "#000",
              width: "100%",
              minHeight: "100vh",
              padding: "60px 20px",
              textAlign: "center",
              overflowY: "auto",
            }}
          >
            <h1
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(48px, 8vw, 120px)",
                marginBottom: "40px",
              }}
            >
              SCHEDULE A VISIT
            </h1>

            {/* Club Selection */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "15px",
                maxWidth: "900px",
                margin: "0 auto 40px auto",
              }}
            >
              {[
                "Club Boavista",
                "Club Coimbra Celas",
                "Club Coimbra Lagrimas",
                "Club Leiria",
                "Club Lisbon 5 de Outubro",
              ].map((club, i) => (
                <div
                  key={i}
                  style={{
                    background: i === 0 ? "#000" : "#FFD400",
                    color: i === 0 ? "#FFD400" : "#000",
                    padding: "20px",
                    border: "1px solid #000",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {club.toUpperCase()}
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
              <label>NAME</label>
              <input
                type="text"
                style={inputStyle}
                placeholder="Your full name"
              />
              <label>E-MAIL</label>
              <input
                type="email"
                style={inputStyle}
                placeholder="you@example.com"
              />
              <label>CONTACT</label>
              <input
                type="tel"
                style={inputStyle}
                placeholder="+91 9876543210"
              />

              <label>PROCESSING OF PERSONAL DATA</label>
              <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
                <label><input type="checkbox" /> YES</label>
                <label><input type="checkbox" /> NO</label>
              </div>

              <p style={{ fontSize: "14px", marginTop: "20px" }}>
                By submitting your data you agree that PHIVE will use your personal
                data in accordance with our Privacy Policy.
              </p>

              <button
                style={{
                  marginTop: "20px",
                  background: "#000",
                  color: "#FFD400",
                  padding: "12px 32px",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                SEND
              </button>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button
                  onClick={() => setView("main")}
                  style={{
                    background: "#000",
                    color: "#FFD400",
                    padding: "10px 24px",
                    borderRadius: "30px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  ⬅ BACK
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// 🔹 Floating Media Component
function FloatingMedia({ type, src, delay }) {
  const randomX = Math.random() * 20 - 10;
  const randomY = Math.random() * 20 - 10;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{
        x: [0, randomX, -randomX, 0],
        y: [0, randomY, -randomY, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        x: { duration: 12 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 12 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {type === "image" ? (
        <img
          src={src}
          alt="gallery"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </motion.div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 20px 0",
  border: "1px solid #000",
  borderRadius: "4px",
  fontSize: "16px",
};
