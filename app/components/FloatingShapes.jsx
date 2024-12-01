'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingShapes() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    // Generate random shapes on component mount
    const generateShapes = () => {
      const newShapes = [];
      const shapeTypes = ['circle', 'square', 'triangle'];
      
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          x: Math.random() * 100, // Random position (0-100%)
          y: Math.random() * 100,
          size: 20 + Math.random() * 40, // Random size between 20-60px
          duration: 20 + Math.random() * 30, // Random animation duration
          delay: Math.random() * -30 // Random start time
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  const renderShape = (shape) => {
    const baseClassName = "absolute opacity-[0.03] blur-sm";
    
    switch (shape.type) {
      case 'circle':
        return (
          <div className={`${baseClassName} rounded-full bg-blue-500`} 
               style={{ width: shape.size, height: shape.size }} />
        );
      case 'square':
        return (
          <div className={`${baseClassName} bg-purple-500`}
               style={{ width: shape.size, height: shape.size }} />
        );
      case 'triangle':
        return (
          <div className={`${baseClassName} border-transparent`}
               style={{
                 width: 0,
                 height: 0,
                 borderLeft: `${shape.size/2}px solid transparent`,
                 borderRight: `${shape.size/2}px solid transparent`,
                 borderBottom: `${shape.size}px solid rgba(236, 72, 153, 0.3)` // pink-500
               }} />
        );
      default:
        return null;
    }
  };

  const floatingAnimation = {
    animate: {
      y: ['0%', '-50%'],
      x: ['0%', '25%', '-25%', '0%'],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
    },
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ 
            x: `${shape.x}%`, 
            y: `${shape.y}%`,
          }}
          variants={floatingAnimation}
          animate="animate"
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
            delay: shape.delay,
          }}
          className="absolute"
        >
          {renderShape(shape)}
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/50 to-gray-900/90" />
    </div>
  );
}