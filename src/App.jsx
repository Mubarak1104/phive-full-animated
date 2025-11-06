import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// 🌟 Main Phive sections
import ActivateSection from "./components/ActivateSection";
import GallerySection from "./components/GallerySection";
import ClassesSection from "./components/ClassesSection";
import AppSection from "./components/AppSection";
import JoinSection from "./components/JoinSection";
import HeroVideoSection from "./components/HeroVideoSection";
import FitnessStrong from "./components/FitnessStrong";
import PhiveCinematicSection from "./components/PhiveCinematicSection";

// 🌟 Footer pages (navigation pages)
import JoinPhive from "./components/FooterPage/JoinPhive";
import ClassesPage from "./components/FooterPage/ClassesPage";
import ClubsPage from "./components/FooterPage/ClubsPage";
import HomePage from "./components/FooterPage/HomePage";
import TimeTablePage from "./components/FooterPage/TimeTablePage";

// 🌟 Common bottom bar
import PhiveBar from "./components/PhiveBar";

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <PhiveBarWrapper />
    </Router>
  );
}

// 🎬 Smooth transition for routes
function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* === Root Homepage === */}
        <Route
          path="/"
          element={
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MainPhiveHome />
            </motion.div>
          }
        />

        {/* === /home (Footer Navigation) === */}
        <Route
          path="/home"
          element={
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HomePage />
            </motion.div>
          }
        />

        {/* === /join === */}
        <Route
          path="/join"
          element={
            <motion.div
              key="join"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <JoinPhive />
            </motion.div>
          }
        />

        {/* === /classes === */}
        <Route
          path="/classes"
          element={
            <motion.div
              key="classes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ClassesPage />
            </motion.div>
          }
        />

        {/* === /timetable === */}
        <Route
          path="/timetable"
          element={
            <motion.div
              key="timetable"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TimeTablePage />
            </motion.div>
          }
        />

        {/* === /clubs === */}
        <Route
          path="/clubs"
          element={
            <motion.div
              key="clubs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ClubsPage />
            </motion.div>
          }
        />

        {/* Redirect any unknown path to / */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

// 🎥 Main Homepage Composition (your cinematic layout)
function MainPhiveHome() {
  return (
    <>
      <PhiveCinematicSection />
      <HeroVideoSection />
      <ActivateSection />
      <GallerySection />
      <ClassesSection />
      <FitnessStrong />
      <AppSection />
      <JoinSection />
    </>
  );
}

// ⚙️ Footer navigation handler (PhiveBar)
function PhiveBarWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    if (page === "home") navigate("/home");
    else if (page === "join") navigate("/join");
    else if (page === "classes") navigate("/classes");
    else if (page === "timetable") navigate("/timetable");
    else if (page === "clubs") navigate("/clubs");
    else navigate("/");
  };

  return <PhiveBar onNavigate={handleNavigate} />;
}
