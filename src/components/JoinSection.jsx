import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageIndexes, setImageIndexes] = useState([0, 0, 0, 0]);

  // === Grouped images for each social circle ===
  const groupedImages = [
    ["/assets/images/img1.jpg", "/assets/images/img2.jpg", "/assets/images/img3.jpg", "/assets/images/img4.jpg"],
    ["/assets/images/img5.jpg", "/assets/images/img6.jpg", "/assets/images/img7.jpg", "/assets/images/img8.jpg"],
    ["/assets/images/img9.jpg", "/assets/images/img10.jpg", "/assets/images/img11.jpg", "/assets/images/img12.jpg"],
    ["/assets/images/img13.jpg", "/assets/images/img14.jpg", "/assets/images/img15.jpg", "/assets/images/img16.jpg"],
  ];

  const socials = [
    { label: "IG", link: "https://instagram.com/phiveclubs" },
    { label: "FB", link: "https://facebook.com/phiveclubs" },
    { label: "YT", link: "https://youtube.com/phiveclubs" },
    { label: "TK", link: "https://tiktok.com/@phiveclubs" },
  ];

  // === Hover image cycling effect ===
  useEffect(() => {
    let timer;
    if (hoveredIndex !== null) {
      timer = setInterval(() => {
        setImageIndexes((prev) =>
          prev.map((idx, i) =>
            i === hoveredIndex ? (idx + 1) % groupedImages[i].length : idx
          )
        );
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [hoveredIndex]);

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#FFD400",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px",
      }}
    >
      {/* === Background Curve Lines === */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      >
        <motion.path
          d="M0,256 C240,96 480,320 720,192 C960,64 1200,224 1440,160"
          fill="none"
          stroke="#000"
          strokeWidth="1"
          animate={{ pathLength: [0, 1, 0.6, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* === Title Banner === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#000",
          borderRadius: "60px",
          padding: "60px 80px",
          color: "#FFD400",
          textAlign: "center",
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(32px, 6vw, 80px)",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 2,
        }}
      >

        <div style={{ position: "relative" }}>
          <span style={{ display: "block" }}># JOIN THE PHIVE</span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              color: "#fff",
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "clamp(26px, 4vw, 50px)",
              position: "absolute",
              bottom: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            FOLLOW US
          </motion.span>
        </div>

        <div
          style={{
            marginTop: "90px",
            color: "#FFD400",
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(40px, 7vw, 100px)",
          }}
        >
          CLUBS
        </div>
      </motion.div>
      {/* === Know More Button === */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        style={{
          border: "2px solid #000",
          background: "transparent",
          color: "#000",
          fontFamily: "Anton, sans-serif",
          fontSize: "18px",
          padding: "14px 36px",
          borderRadius: "50px",
          cursor: "pointer",
          marginBottom: "80px",
        }}
      >
        LEARN MORE
      </motion.button>

      {/* === Round Social Circles === */}
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          gap: "60px",
          paddingBottom: "60px",
        }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              minWidth: "260px",
              minHeight: "260px",
              borderRadius: "50%",
              overflow: "hidden",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "Anton, sans-serif",
              fontSize: "70px",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <motion.img
              key={groupedImages[i][imageIndexes[i]]}
              src={groupedImages[i][imageIndexes[i]]}
              alt={s.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 2,
                textShadow: "0 4px 10px rgba(0,0,0,0.4)",
              }}
            >
              {s.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* === Footer Text === */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: "#000",
          fontFamily: "Anton, sans-serif",
          fontSize: "26px",
          letterSpacing: "1px",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        KEEP UP WITH ALL THE LATEST ON OUR SOCIALS!
      </motion.p>

      

      {/* === Footer Line + Bottom Text === */}
      <div
        style={{
          width: "100%",
          borderTop: "1px solid rgba(0,0,0,0.6)",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Anton, sans-serif",
          fontSize: "14px",
          color: "#000",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={{cursor: "pointer" }}>PRIVACY POLICY</span>
          <span style={{cursor: "pointer" }}>COMPLAINTS BOOK</span>
        </div>

      

        {/* Right Section */}
        <div>MADE BY BÜRO</div>
      </div>

      {/* === Popup Form (Animated Slide-In) === */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "450px",
              height: "100vh",
              background: "#FFD400",
              color: "#000",
              boxShadow: "-5px 0 15px rgba(0,0,0,0.4)",
              zIndex: 99999,
              padding: "40px 30px",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "#000",
                color: "#FFD400",
                border: "none",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <h2
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "48px",
                marginBottom: "20px",
              }}
            >
              KNOW MORE
            </h2>

            <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
              CHOOSE THE CLUB YOU ARE INTERESTED IN
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {["BOAVISTA", "COIMBRA", "LÁGRIMAS", "LEIRIA", "LISBON"].map((club, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #000",
                    background: i === 0 ? "#000" : "#FFD400",
                    color: i === 0 ? "#FFD400" : "#000",
                    fontWeight: "bold",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  CLUB {club}
                </div>
              ))}
            </div>

            <label>NAME</label>
            <input type="text" placeholder="Your name" style={inputStyle} />
            <label>E-MAIL</label>
            <input type="email" placeholder="Your email" style={inputStyle} />
            <label>CONTACT</label>
            <input type="tel" placeholder="+91 9876543210" style={inputStyle} />

            <label>PROCESSING OF PERSONAL DATA</label>
            <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
              <label>
                <input type="checkbox" /> YES
              </label>
              <label>
                <input type="checkbox" /> NO
              </label>
            </div>

            <p style={{ fontSize: "14px", lineHeight: 1.5 }}>
              By submitting your data, you agree that PHIVE will use your personal data in accordance
              with our Privacy Policy.
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
                width: "100%",
              }}
            >
              SEND
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// === Reusable Input Style ===
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 20px 0",
  border: "1px solid #000",
  borderRadius: "4px",
  fontSize: "16px",
};
