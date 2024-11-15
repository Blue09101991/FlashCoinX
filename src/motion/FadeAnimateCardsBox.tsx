"use client";

import { motionProps } from "@/config/types";
import { motion } from "framer-motion";

const FadeAnimateCardsBox = ({ children, className }: motionProps) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`${className && className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
export default FadeAnimateCardsBox;
