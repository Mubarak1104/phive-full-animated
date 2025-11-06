import React from "react";
import { motion } from "framer-motion";

export default function ClubsPage() {
  // 🟡 Real club list with images
  const clubs = [
    {
      name: "CLUBE PORTO BOAVISTA",
      image: "/assets/images/img1.jpg",
    },
    {
      name: "CLUBE COIMBRA LÁGRIMAS",
      image: "/assets/images/img2.jpg",
    },
    {
      name: "CLUBE COIMBRA CELAS",
      image: "/assets/images/img3.jpg",
    },
    {
      name: "CLUBE LEIRIA",
      image: "/assets/images/img4.jpg",
    },
    {
      name: "CLUBE LISBOA 5 DE OUTUBRO",
      image: "/assets/images/img5.jpg",
    },
    {
      name: "CLUBE BRAGA CENTER",
      image: "/assets/images/img6.jpg",
    },
    {
      name: "CLUBE AVEIRO CENTRAL",
      image: "/assets/images/img7.jpg",
    },
    {
      name: "CLUBE GAIA FIT",
      image: "/assets/images/img8.jpg",
    },
    {
      name: "CLUBE SANTARÉM",
      image: "/assets/images/img9.jpg",
    },
    {
      name: "CLUBE FARO ACTIVE",
      image: "/assets/images/img10.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "#000",
        color: "#FFD400",
        minHeight: "100vh",
        fontFamily: "Anton, sans-serif",
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      {/* ====== HEADER ====== */}
      <h1
        style={{
          fontSize: "clamp(80px, 10vw, 160px)",
          letterSpacing: "2px",
          margin: "0",
        }}
      >
        CLUBS
      </h1>
      <p
        style={{
          fontSize: "clamp(18px, 2vw, 24px)",
          marginTop: "10px",
          color: "#fff",
          fontFamily: "'Brush Script MT', cursive",
        }}
      >
        Explore our clubs across Portugal.
      </p>

      {/* ====== CLUB GRID ====== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          width: "90%",
          maxWidth: "1100px",
          margin: "60px auto",
        }}
      >
        {clubs.map((club, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              border: "2px solid #FFD400",
              borderRadius: "10px",
              overflow: "hidden",
              background: idx % 2 === 0 ? "#FFD400" : "transparent",
              color: idx % 2 === 0 ? "#000" : "#FFD400",
              cursor: "pointer",
              boxShadow:
                idx % 2 === 0
                  ? "0 0 20px rgba(255,212,0,0.3)"
                  : "0 0 10px rgba(255,212,0,0.1)",
              transition: "0.4s",
            }}
          >
            {/* Image */}
            <img
              src={club.image}
              alt={club.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Club name */}
            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                  marginTop: "8px",
                }}
              >
                {club.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
