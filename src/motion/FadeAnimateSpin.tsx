"use client";

import { motionProps } from "@/config/types";
import { motion } from "framer-motion";

const FadeAnimateSpin = ({ children, className }: motionProps) => {
  return (
    <motion.div
      className={`${className && className}`}
      initial={{ opacity: 0, scale: 0, translateY: 60 }}
      whileInView={{
        opacity: 1,
        rotate: 360,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 280,
          damping: 80,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
export default FadeAnimateSpin;
