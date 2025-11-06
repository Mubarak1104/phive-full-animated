import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinPhive() {
  const [step, setStep] = useState(1);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#FFD400",
        minHeight: "100vh",
        fontFamily: "Anton, sans-serif",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <AnimatePresence mode="wait">
        {/* STEP 1 - JOIN BANNER */}
        {step === 1 && (
          <motion.div
            key="banner"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <h1
              style={{
                fontSize: "clamp(80px, 12vw, 200px)",
                margin: 0,
                lineHeight: 1,
              }}
            >
              JOIN US
            </h1>
            <p
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontSize: "clamp(20px, 3vw, 40px)",
                color: "white",
              }}
            >
              DIVE INTO THE PHIVE FAMILY
            </p>

            <button
              onClick={() => setStep(2)}
              style={buttonStyle}
            >
              CHOOSE CLUB
            </button>
          </motion.div>
        )}

        {/* STEP 2 - CHOOSE CLUB */}
     {step === 2 && (
  <motion.div
    key="clubs"
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.6 }}
  >
    <h3
      style={{
        color: "#FFD400",
        marginBottom: "40px",
        letterSpacing: "1px",
      }}
    >
      ESCOLHE O TEU CLUBE
    </h3>

    <div style={clubGrid}>
      {[
        { name: "CLUBE PORTO BOAVISTA", image: "/assets/images/img1.jpg" },
        { name: "CLUBE COIMBRA LÁGRIMAS", image: "/assets/images/img2.jpg" },
        { name: "CLUBE COIMBRA CELAS", image: "/assets/images/img3.jpg" },
        { name: "CLUBE LEIRIA", image: "/assets/images/img4.jpg" },
        { name: "CLUBE LISBOA 5 DE OUTUBRO", image: "/assets/images/img5.jpg" },
        { name: "CLUBE BRAGA CENTER", image: "/assets/images/img6.jpg" },
        { name: "CLUBE AVEIRO CENTRAL", image: "/assets/images/img7.jpg" },
        { name: "CLUBE GAIA FIT", image: "/assets/images/img8.jpg" },
        { name: "CLUBE SANTARÉM", image: "/assets/images/img9.jpg" },
        { name: "CLUBE FARO ACTIVE", image: "/assets/images/img10.jpg" },
      ].map((club, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            ...clubCard,
            background: idx === 0 ? "#FFD400" : "transparent",
            color: idx === 0 ? "#000" : "#FFD400",
            boxShadow:
              idx === 0
                ? "0 0 15px rgba(255,212,0,0.4)"
                : "0 0 8px rgba(255,212,0,0.1)",
          }}
          onClick={() => setStep(3)}
        >
          <img
            src={club.image}
            alt={club.name}
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
          <h4 style={{ marginTop: "10px", fontSize: "16px" }}>{club.name}</h4>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}


        {/* STEP 3 - MEMBERSHIP PLANS */}
        {step === 3 && (
          <motion.div
            key="plans"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "30px" }}>
              <button style={{ ...tabBtn, background: "#FFD400", color: "#000" }}>
                ADULTOS
              </button>
              <button style={{ ...tabBtn, marginLeft: "10px" }}>KIDS</button>
            </div>
            <div style={planGrid}>
              {[
                { name: "ACESSO TOTAL", price: "14.40€", desc: "Com fidelização" },
                { name: "ACESSO TOTAL", price: "16.40€", desc: "Sem fidelização" },
                { name: "ACESSO PARCIAL", price: "13.40€", desc: "Com fidelização" },
              ].map((plan, idx) => (
                <div key={idx} style={planCard}>
                  <h3>{plan.name}</h3>
                  <p>{plan.desc}</p>
                  <h2>{plan.price}</h2>
                  <p>Por semana</p>
                  <button
                    style={buttonStyle}
                    onClick={() => setStep(4)}
                  >
                    SELECIONAR
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 4 - WELLNESS PACK */}
        {step === 4 && (
          <motion.div
            key="pack"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ marginBottom: "20px" }}>WELLNESS PACK</h1>
            <p>4 SESSÕES · PERSONAL TRAINING · 3D BODY SCANNER</p>
            <h3 style={{ margin: "30px 0", textDecoration: "line-through" }}>120€</h3>
            <h2 style={{ color: "#FFD400" }}>75€</h2>
            <button
              onClick={() => setStep(1)}
              style={buttonStyle}
            >
              BACK TO START
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const buttonStyle = {
  background: "#FFD400",
  color: "#000",
  border: "none",
  padding: "12px 28px",
  borderRadius: "30px",
  fontWeight: "bold",
  marginTop: "40px",
  cursor: "pointer",
  transition: "0.3s",
};

const clubGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  width: "90%",
  maxWidth: "1000px",
  margin: "auto",
};

const clubCard = {
  border: "2px solid #FFD400",
  padding: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
};

const planGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const planCard = {
  background: "#1a1a1a",
  borderRadius: "10px",
  padding: "30px",
  width: "280px",
  color: "#FFD400",
};

const tabBtn = {
  background: "transparent",
  color: "#FFD400",
  border: "2px solid #FFD400",
  borderRadius: "20px",
  padding: "8px 20px",
  cursor: "pointer",
  fontWeight: "bold",
};
