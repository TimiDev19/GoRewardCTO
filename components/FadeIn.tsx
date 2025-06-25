"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 0.5, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" }); // Triggers when 50px into view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }} // Starts invisible and slightly lower
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animates only when visible
      transition={{ duration, delay, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
