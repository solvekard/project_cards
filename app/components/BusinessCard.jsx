"use client"
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function BusinessCard() {
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null); // Reference to store animation controls
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Default floating animation
  const defaultRotateX = useMotionValue(0);
  const defaultRotateY = useMotionValue(0);

  useEffect(() => {
    let isAnimating = true;

    // Continuous floating animation when not hovered
    const animateCard = async () => {
      while (isAnimating && !isHovered) {
        if (!isAnimating) break;
        
        await Promise.all([
          animate(defaultRotateY, [0, 5, -5, 0], {
            duration: 6,
            ease: "easeInOut",
          }),
          animate(defaultRotateX, [0, 3, -3, 0], {
            duration: 6,
            ease: "easeInOut",
          })
        ]);
      }
    };

    animateCard();

    // Cleanup function
    return () => {
      isAnimating = false;
      defaultRotateX.set(0);
      defaultRotateY.set(0);
    };
  }, [isHovered]);

  function handleMouseMove(event) {
    if (!isHovered) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    // Reset all motion values
    x.set(0);
    y.set(0);
    defaultRotateX.set(0);
    defaultRotateY.set(0);
  }

  return (
    <motion.div
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full aspect-[1.586/1] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl
                   shadow-2xl p-6 flex flex-col justify-between relative group"
        style={{
          rotateX: isHovered ? rotateX : defaultRotateX,
          rotateY: isHovered ? rotateY : defaultRotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          restDelta: 0.001 
        }}
      >
        {/* Glowing effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl 
                       opacity-30 group-hover:opacity-50 transition-opacity rounded-xl" />

        {/* Card content with 3D effect */}
        <div className="transform translate-z-20" style={{ transform: 'translateZ(20px)' }}>
          <div className="text-2xl font-bold mb-2">Shidharth Singh</div>
          <div className="text-lg text-white/80">Software Engineer</div>
        </div>

        <div className="flex justify-between items-end transform translate-z-20" 
             style={{ transform: 'translateZ(20px)' }}>
          <div className="text-sm opacity-80">Tap to connect</div>
          <motion.div 
            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(255,255,255,0.4)",
                "0 0 0 10px rgba(255,255,255,0)",
                "0 0 0 0 rgba(255,255,255,0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4v16H4V4h16m2-2H2v20h20V2z"/>
              <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
            </svg>
          </motion.div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                         transform -rotate-45 translate-x-full group-hover:translate-x-[-250%] transition-transform duration-1000" />
        </div>
      </motion.div>
    </motion.div>
  );
}