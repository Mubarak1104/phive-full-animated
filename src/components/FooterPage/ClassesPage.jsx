import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClassesPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // 🟡 Media list (images + videos)
  const mediaItems = [
    { type: "image", src: "/assets/images/img1.jpg", category: "MOVES", title: "ABDOMINAL" },
    { type: "image", src: "/assets/images/img2.jpg", category: "AQUA", title: "AQUA AEROBICS" },
    { type: "video", src: "/assets/videos/gym1.mp4", category: "AQUA", title: "BABY SWIMMING" },
    { type: "image", src: "/assets/images/img3.jpg", category: "MOVES", title: "BODY ATTACK" },
    { type: "video", src: "/assets/videos/gym2.mp4", category: "POWER", title: "CROSSFIT POWER" },
    { type: "image", src: "/assets/images/img4.jpg", category: "FLOW", title: "YOGA FLOW" },
    { type: "image", src: "/assets/images/img5.jpg", category: "KIDS", title: "KIDS DANCE" },
    { type: "video", src: "/assets/videos/gym3.mp4", category: "RIDE", title: "SPINNING RIDE" },
    { type: "image", src: "/assets/images/img6.jpg", category: "MOVES", title: "ZUMBA MOVES" },
    { type: "image", src: "/assets/images/img7.jpg", category: "FLOW", title: "PILATES FLOW" },
    { type: "image", src: "/assets/images/img8.jpg", category: "POWER", title: "STRENGTH TRAINING" },
    { type: "image", src: "/assets/images/img9.jpg", category: "AQUA", title: "AQUA FITNESS" },
  ];

  const filters = ["ALL", "MOVES", "AQUA", "FLOW", "POWER", "KIDS", "RIDE"];

  const filteredItems =
    activeFilter === "ALL"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeFilter);

  return (
    <div
      style={{
        background: "#0d0a00",
        color: "#FFD400",
        minHeight: "100vh",
        fontFamily: "Anton, sans-serif",
        textAlign: "center",
        paddingBottom: "100px",
      }}
    >
      {/* ======= HEADER ======= */}
      <section style={{ paddingTop: "120px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(80px, 12vw, 200px)",
            letterSpacing: "2px",
            margin: 0,
          }}
        >
          CLASSES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            color: "#fff",
            fontFamily: "'Brush Script MT', cursive",
            fontSize: "clamp(20px, 3vw, 40px)",
            marginTop: "-10px",
          }}
        >
          LET’S START MOVING!
        </motion.p>
      </section>

      {/* ======= FILTER BAR ======= */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "40px 0 60px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", letterSpacing: "1px" }}>FILTER</span>
        {filters.map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter)}
            style={{
              background: activeFilter === filter ? "#FFD400" : "transparent",
              color: activeFilter === filter ? "#000" : "#FFD400",
              border: "1px solid #FFD400",
              borderRadius: "20px",
              padding: "6px 18px",
              fontWeight: "bold",
              fontSize: "12px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* ======= GRID ======= */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          width: "90%",
          margin: "auto",
        }}
      >
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "relative",
                border: "2px solid transparent",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                background: "#000",
                transition: "0.4s",
              }}
              whileHover={{
                scale: 1.02,
                borderColor: "#FFD400",
                boxShadow: "0 0 25px rgba(255,212,0,0.3)",
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#FFD400",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </p>
                <span
                  style={{
                    fontSize: "10px",
                    opacity: 0.8,
                    color: "#fff",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "2px 6px",
                    marginTop: "5px",
                    display: "inline-block",
                  }}
                >
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
