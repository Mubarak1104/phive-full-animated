import React from "react";
import { motion } from "framer-motion";

export default function FitnessStrong() {
  return (
    <section
      style={{
        backgroundColor: "#FFD400",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* === Main FITNESS STRONG Text === */}
      <motion.h1
        initial={{ scale: 0.3, opacity: 0.2 }}
        animate={{
          scale: [0.3, 1.2, 1],
          opacity: [0.2, 1, 1],
          letterSpacing: ["-20px", "0px"],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
        }}
        style={{
          fontFamily: "Anton, sans-serif",
          color: "#000",
          fontSize: "clamp(60px, 20vw, 400px)",
          lineHeight: 0.8,
          textAlign: "center",
          zIndex: 1,
          userSelect: "none",
        }}
      >
        FITNESS STRONG
      </motion.h1>

      {/* === Overlay White Text (GO FIT) === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 0.7, 1],
          scale: [0.8, 1.2, 1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          position: "absolute",
          color: "#fff",
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(40px, 10vw, 160px)",
          textShadow: "0 0 35px rgba(255,255,255,0.7)",
          zIndex: 2,
          userSelect: "none",
        }}
      >
        GO FIT
      </motion.div>

      {/* === Left Iron Plate === */}
      <motion.img
        src="/assets/images/ironplate.png" // left plate
        alt="iron plate"
        initial={{ y: 300, rotate: 0 }}
        animate={{
          y: [-150, 200, -150],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
    left: "10%",
    width: "220px",
    height: "220px",
    borderRadius: "50%",              // ⭕ ensures it's perfectly round
    objectFit: "cover",               // scales the image nicely within circle
    overflow: "hidden",               // clips edges cleanly
    backgroundColor: "#000",          // optional - fills transparent parts
    zIndex: 3,
    filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.4))",
        }}
      />

      {/* === Right Iron Plate === */}
      <motion.img
        src="/assets/images/ironplate.png" // right plate
        alt="iron plate"
        initial={{ y: -200, rotate: 0 }}
        animate={{
          y: [200, -150, 200],
          rotate: [0, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
    position: "absolute",
    right: "10%",
    width: "220px",
    height: "220px",
    borderRadius: "50%",              // ⭕ ensures it's perfectly round
    objectFit: "cover",               // scales the image nicely within circle
    overflow: "hidden",               // clips edges cleanly
    backgroundColor: "#000",          // optional - fills transparent parts
    zIndex: 3,
    filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.4))",
        }}
      />

      {/* === Gradient Overlay (depth & tone) === */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.25))",
          zIndex: 0,
        }}
      />
    </section>
  );
}
