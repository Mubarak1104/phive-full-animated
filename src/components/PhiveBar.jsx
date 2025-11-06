import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react"; // Optional — lightweight icon library

export default function PhiveBar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleNavigate = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      {/* === Bottom Center Bar === */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#1a1a1a",
          color: "#FFD400",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 30px",
          borderRadius: "50px",
          zIndex: 100,
          fontFamily: "Anton, sans-serif",
          letterSpacing: "1px",
          fontSize: "18px",
          width: "260px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
        }}
      >
        {/* ☰ Menu button */}
        <div style={{ cursor: "pointer" }} onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* 🏠 Home icon — navigate to main homepage */}
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => navigate("/")}
        >
          <Home size={20} color="#FFD400" />
          <div style={{ fontWeight: "bold" }}>PHIVE</div>
        </div>

        {/* 🔊 Sound icon */}
        <div>🔊</div>
      </div>

      {/* === Center Popup Menu === */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                zIndex: 199,
              }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu popup */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: "50%",
                left: "35%",
                transform: "translate(-50%, -50%)",
                background: "#FFD400",
                color: "#000",
                width: "400px",
                borderRadius: "4px",
                zIndex: 200,
                fontFamily: "Anton, sans-serif",
                overflow: "hidden",
                boxShadow: "0 0 25px rgba(0,0,0,0.8)",
              }}
            >
              {/* Language Toggle */}
              <div
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "12px",
                  background: "#000",
                  color: "#FFD400",
                }}
              >
                <span style={{ opacity: 0.6 }}>PORTUGUÊS</span>{" "}
                <span style={{ fontWeight: "bold", marginLeft: 8 }}>ENGLISH</span>
              </div>

              {/* Menu items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 0",
                  gap: "14px",
                  fontSize: "22px",
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigate("join")}
                >
                  JOIN PHIVE
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  HOMEPAGE
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigate("classes")}
                >
                  CLASSES
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigate("timetable")}
                >
                  TIMETABLE
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigate("clubs")}
                >
                  CLUBS
                </div>
              </div>

              {/* Footer bar in popup */}
              <div
                style={{
                  background: "#000",
                  color: "#FFD400",
                  padding: "12px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "40px",
                    fontSize: "18px",
                  }}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    ✕
                  </div>

                  {/* 🏠 Home icon in popup footer */}
                  <div
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => navigate("/")}
                  >
                    <Home size={18} color="#FFD400" />
                  </div>

                  <div>🔊</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
