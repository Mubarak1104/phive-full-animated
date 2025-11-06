
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    color: "#FFD400", // yellow
    text: "PHIVE PORTO",
    image: "/assets/images/img1.jpg",
    video: "/assets/videos/gym6.mp4",
    headline: "PHIVE PORTO",
    subtitle: "FIND OUT MORE",
    button: "DISCOVER THE CLUB",
  },
  {
    id: 2,
    color: "#A259FF", // purple
    text: "PHIVE LISBON",
    image: "/assets/images/Hero3.jpg",
    video: "/assets/videos/gym7.mp4",
    headline: "PHIVE LISBOA 5 DE OUTUBRO",
    subtitle: "FIND OUT MORE",
    button: "DISCOVER THE CLUB",
  },
  {
    id: 3,
    color: "#FF89B0", // pink
    text: "TRAIN EVERY DAY",
    image: "/assets/images/img3.jpg",
    video: "/assets/videos/gym4.mp4",
    headline: "TRAIN EVERY DAY",
    subtitle: "ON YOUR PHIVE CLUB",
    button: "SIGN UP",
  },
];

export default function PhiveSplitCinematic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState("banner"); // banner -> split -> video
  const videoRef = useRef(null);

  useEffect(() => {
    const timeline = async () => {
      setPhase("banner");
      await new Promise((r) => setTimeout(r, 1500)); // hold full banner 1.5s
      setPhase("split"); // split effect
      await new Promise((r) => setTimeout(r, 800)); // wait for split animation
      setPhase("video"); // reveal video

      const v = videoRef.current;
      if (v) {
        v.currentTime = 0;
        const playPromise = v.play();
        if (playPromise) playPromise.catch(() => {});
      }

      await new Promise((r) => setTimeout(r, 6000)); // show video for 6s
      setActiveIndex((prev) => (prev + 1) % slides.length); // next slide
    };

    timeline();
  }, [activeIndex]);

  const active = slides[activeIndex];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        fontFamily: "'Anton', sans-serif",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <motion.img
        key={active.image}
        src={active.image}
        alt="background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* TOP HALF OF BANNER */}
      <motion.div
        animate={{
          top: phase === "banner" ? "25%" : "0%",
          height: phase === "banner" ? "50%" : "25%",
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: 0,
          width: "200%",
          background: active.color,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* MOVING TEXT */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            whiteSpace: "nowrap",
            fontSize: "calc(6vw + 10px)",
            color: "#000",
            paddingLeft: "6vw",
          }}
        >
          {Array(6)
            .fill(active.text)
            .map((t, i) => (
              <span key={i} style={{ marginRight: "6vw" }}>
                {t}
              </span>
            ))}
        </motion.div>
      </motion.div>

      {/* BOTTOM HALF OF BANNER */}
      <motion.div
        animate={{
          bottom: phase === "banner" ? "25%" : "0%",
          height: phase === "banner" ? "50%" : "25%",
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: 0,
          width: "200%",
          background: active.color,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* MOVING TEXT */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            whiteSpace: "nowrap",
            fontSize: "calc(6vw + 10px)",
            color: "#000",
            paddingLeft: "6vw",
          }}
        >
          {Array(6)
            .fill(active.text)
            .map((t, i) => (
              <span key={i} style={{ marginRight: "6vw" }}>
                {t}
              </span>
            ))}
        </motion.div>
      </motion.div>

      {/* CENTER VIDEO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "video" ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85%",
          height: "60%",
          zIndex: 4,
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 12px 80px rgba(0,0,0,0.6)",
        }}
      >
        <video
          ref={videoRef}
          src={active.video}
          muted
          playsInline
          autoPlay={false}
          loop={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* TEXT OVERLAY */}
      {phase === "video" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(20px,3vw,36px)",
              letterSpacing: "1px",
              marginBottom: "8px",
            }}
          >
            {active.headline}
          </div>
          <div
            style={{
              fontSize: "clamp(16px,2.5vw,24px)",
              fontWeight: "bold",
              marginBottom: "14px",
            }}
          >
            {active.subtitle}
          </div>
          <div
            style={{
              display: "inline-block",
              border: "2px solid #fff",
              borderRadius: "40px",
              padding: "8px 24px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            {active.button}
          </div>
        </motion.div>
      )}
    </section>
  );
}
