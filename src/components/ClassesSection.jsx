import React from 'react';
import { motion } from 'framer-motion';
export default function ClassesSection(){
  const classes = ['Hydrobike','Pilates','Yoga','Cycling','Strength','Boxing'];
  return (
    <section className="classes">
      <div className="container">
        <motion.h2 initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7}}>CLASSES</motion.h2>
        <motion.p initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.15,duration:0.7}}>THE MOST EXCITING CLASSES, CREATED BY TOP INSTRUCTORS. NO MATTER YOUR GOAL, WE CAN MAKE IT HAPPEN.</motion.p>
      </div>
    </section>
  )
}