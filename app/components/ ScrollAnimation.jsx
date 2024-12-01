'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollAnimation({ children, direction = 'up', delay = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === 'up' ? [100, 0, -100] : [-100, 0, 100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y: yOffset,
      }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}