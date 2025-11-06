import React from "react";
import { motion } from "framer-motion";

export default function HeroVideoSection() {
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffd400",
      }}
    >
      {/* Background Color Animation */}
      <motion.div
        animate={{
          backgroundColor: ["#ffd400", "#b06aff", "#00b4ff"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      ></motion.div>

      {/* Gym Video */}
      <video
        src="/assets/videos/gym1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "auto",
          borderRadius: "20px",
          objectFit: "cover",
          zIndex: 1,
          clipPath: "inset(10% 0 10% 0)", // Cuts top & bottom
        }}
      />

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          textShadow: "0 4px 12px rgba(0,0,0,0.6)",
        }}
      >
        <h2
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(36px, 6vw, 80px)",
            margin: "0 0 10px 0",
          }}
        >
          FIND OUT MORE
        </h2>
        <button
          style={{
            border: "2px solid #fff",
            background: "transparent",
            color: "#fff",
            padding: "10px 28px",
            borderRadius: "40px",
            fontWeight: 700,
            letterSpacing: "1px",
            marginTop: "12px",
          }}
        >
          DISCOVER THE CLUB
        </button>

        <p style={{ marginTop: "24px", fontSize: "18px", color: "#fff" }}>
          GYM TIME: 06:30 AM – 10:00 PM
        </p>
      </motion.div>
    </section>
  );
}
