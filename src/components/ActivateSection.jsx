import React from "react";
import { motion } from "framer-motion";

export default function ActivateSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#14100B",
        color: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* --- Animated Yellow Curve Background --- */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <motion.path
          d="M0,400 C300,200 700,600 1440,300"
          stroke="#FFD400"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* --- Yellow Badge --- */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundColor: "#FFD400",
          borderRadius: "50px",
          padding: "80px 60px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          boxShadow: "0 10px 40px rgba(255, 212, 0, 0.3)",
        }}
      >
        {/* --- Bold Main Text --- */}
        <motion.h1
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(48px, 6vw, 120px)",
            lineHeight: "1.1",
            color: "#000",
            margin: 0,
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          ACTIVATE <br />
          YOUR <br />
          SENSES
        </motion.h1>

        {/* --- Script Overlay Text --- */}
        <motion.h2
          style={{
            position: "absolute",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-3deg)",
            fontFamily: "'Brush Script MT', cursive",
            fontSize: "clamp(24px, 4vw, 60px)",
            color: "#fff",
            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
            whiteSpace: "nowrap",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        >
          PUSH YOUR LIMITS
        </motion.h2>
      </motion.div>

      {/* --- Bottom Text --- */}
      <motion.p
        style={{
          color: "#FFD400",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          marginTop: "60px",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: "1.6",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        PHIVE HAS CLUBS LOCATED IN COIMBRA, LEIRIA, LISBON, AND PORTO. <br />
        GET TO KNOW EACH ONE!
      </motion.p>
    </section>
  );
}
