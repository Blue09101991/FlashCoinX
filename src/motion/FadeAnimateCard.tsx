"use client";

import { motionProps } from "@/config/types";
import { motion } from "framer-motion";

const FadeAnimateCardsBox = ({ children, idx }: motionProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div key={idx} variants={item}>
      {children}
    </motion.div>
  );
};
export default FadeAnimateCardsBox;
