import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "clamp(60px, 8vw, 120px)" }}>WELCOME TO PHIVE</h1>
      <p style={{ fontSize: "20px", marginTop: "20px", color: "#fff" }}>
        Your Fitness, Your Community, Your Lifestyle.
      </p>
    </motion.div>
  );
}
