import React from "react";
import { motion } from "framer-motion";

export default function AppSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // full screen height
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        background: "linear-gradient(180deg, #0e0901 0%, #3a2c00 100%)",
        overflow: "hidden",
      }}
    >
      {/* === Left Content === */}
      <div
        style={{
          flex: 1,
          color: "#FFD400",
          fontFamily: "Anton, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "550px",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(60px, 8vw, 120px)",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          PHIVE APP
        </h2>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            // fontWeight: "bold",
            color: "#FFD400",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          SCHEDULE AND MANAGE YOUR CLASSES, ACCESS YOUR TRAINING PLAN, BOOK
          APPOINTMENTS, AND MUCH MORE!
        </p>

        {/* === Store Badges === */}
       <div style={{ display: "flex", gap: "20px" }}>
  {/* === App Store === */}
  <motion.a
    href="https://apps.apple.com/pt/app/phive/id1510568455"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img
      src="/assets/images/img18.png"
      alt="App Store"
      style={{
        width: 100,
        cursor: "pointer",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
      }}
    />
  </motion.a>

  {/* === Google Play === */}
  <motion.a
    href="https://play.google.com/store/apps/details?id=pt.sportstudio.phive"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img
      src="/assets/images/img19.png"
      alt="Google Play"
      style={{
        width: 100,
        cursor: "pointer",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
      }}
    />
  </motion.a>
</div>

      </div>

      {/* === Right Phone Mockup === */}
      <motion.div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          height: "100%",
        }}
      >
        <motion.img
          src="/assets/images/img20.png"
          alt="Phive App Phone"
          style={{
            width: 420,
            height: "auto",
            transform: "rotate(-5deg)",
            filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.6))",
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
