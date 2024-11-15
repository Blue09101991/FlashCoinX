"use client";

import { motionProps } from "@/config/types";
import { motion } from "framer-motion";

const FadeRight = ({ children, className }: motionProps) => {
  return (
    <motion.div
      className={`${className && className}`}
      initial={{ opacity: 0, translateX: 60 }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default FadeRight;
