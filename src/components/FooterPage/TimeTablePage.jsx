import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TimeTablePage() {
  const [selectedDay, setSelectedDay] = useState("THURSDAY");
  const [selectedClub, setSelectedClub] = useState("CLUB BOAVISTA");

  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const clubs = [
    { name: "CLUB BOAVISTA", image: "/assets/images/img10.jpg" },
    { name: "CLUB COIMBRA CELAS", image: "/assets/images/img11.jpg" },
    { name: "CLUB COIMBRA LÁGRIMAS", image: "/assets/images/img12.jpg" },
    { name: "CLUB LEIRIA", image: "/assets/images/img13.jpg" },
    { name: "CLUB LISBON 5 DE OUTUBRO", image: "/assets/images/img14.jpg" },
  ];

  const timetableData = [
    {
      icon: "🏋️‍♂️",
      className: "BOOTCAMP",
      schedule: "07:00 — 07:45",
      duration: "45 MIN",
      studio: "ESTÚDIO POWER",
      instructor: "DUARTE GONÇALVES ROCHA MOTA",
    },
    {
      icon: "🧘‍♀️",
      className: "BODY BALANCE",
      schedule: "09:30 — 10:15",
      duration: "45 MIN",
      studio: "ESTÚDIO FLOW",
      instructor: "INÊS FERREIRA GONÇALVES",
    },
    {
      icon: "💃",
      className: "LM DANCE",
      schedule: "10:30 — 11:15",
      duration: "45 MIN",
      studio: "ESTÚDIO MOVES",
      instructor: "JOÃO CARLOS CARVALHO GRAÇA",
    },
    {
      icon: "🏊‍♂️",
      className: "HIDROBIKE",
      schedule: "10:30 — 11:15",
      duration: "45 MIN",
      studio: "ESTÚDIO AQUA",
      instructor: "INÊS FERREIRA GONÇALVES",
    },
  ];

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
          TIMETABLE
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
          IT’S TIME FOR SOME ACTION
        </motion.p>
      </section>

      {/* ======= CLUB SELECTION ======= */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {clubs.map((club, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedClub(club.name)}
            style={{
              width: "180px",
              border:
                selectedClub === club.name
                  ? "2px solid #FFD400"
                  : "1px solid #FFD40050",
              borderRadius: "6px",
              background:
                selectedClub === club.name ? "#FFD400" : "transparent",
              color: selectedClub === club.name ? "#000" : "#FFD400",
              padding: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <img
              src={club.image}
              alt={club.name}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <p style={{ fontSize: "14px", marginTop: "8px" }}>
              {club.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ======= DAY TABS ======= */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          margin: "60px 0 30px",
          flexWrap: "wrap",
        }}
      >
        {days.map((day) => (
          <motion.div
            key={day}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedDay(day)}
            style={{
              cursor: "pointer",
              fontSize: "14px",
            //   fontWeight: "bold",
              color: selectedDay === day ? "#000" : "#FFD400",
              background: selectedDay === day ? "#FFD400" : "transparent",
              padding: "6px 14px",
              borderRadius: "20px",
              transition: "0.3s",
            }}
          >
            {day}
          </motion.div>
        ))}
      </div>

      {/* ======= TIMETABLE ======= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "80%",
          maxWidth: "1000px",
          margin: "auto",
          background: "#fffde7",
          borderRadius: "6px",
          overflow: "hidden",
          color: "#000",
        }}
      >
        {/* Table Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr 1.2fr",
            background: "#0d0a00",
            color: "#FFD400",
            textAlign: "left",
            padding: "12px 20px",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          <div>Class</div>
          <div>Schedule</div>
          <div>Duration</div>
          <div>Studio</div>
          <div>Instructor</div>
        </div>

        {/* Table Rows */}
        <AnimatePresence>
          {timetableData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr 1.2fr",
                alignItems: "center",
                padding: "14px 20px",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                background: idx % 2 === 0 ? "#fffce0" : "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    background:
                      item.className.includes("BODY") || item.className.includes("YOGA")
                        ? "#4caf50"
                        : item.className.includes("HIDRO")
                        ? "#4dc3c8"
                        : item.className.includes("DANCE")
                        ? "#e53935"
                        : "#9ccc65",
                    color: "#fff",
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  {item.icon}
                </span>
                <strong>{item.className}</strong>
              </div>
              <div style={{ fontSize: "13px" }}>{item.schedule}</div>
              <div style={{ fontSize: "13px" }}>{item.duration}</div>
              <div style={{ fontSize: "13px" }}>{item.studio}</div>
              <div style={{ fontSize: "13px" }}>{item.instructor}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
