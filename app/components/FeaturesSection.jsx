'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeaturesSection() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Feature 1 */}
        <div ref={ref1} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
              <motion.div
                className="w-full h-full p-8 flex flex-col justify-center items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* NFC Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8] 
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    className="w-24 h-24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M12 12L12 12.01M8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12M6 12C6 9.87827 6.84285 7.84344 8.34315 6.34315C9.84344 4.84285 11.8783 4 14 4C16.1217 4 18.1566 4.84285 19.6569 6.34315C21.1571 7.84344 22 9.87827 22 12" 
                    />
                  </svg>
                </motion.div>

                {/* Main Text */}
                <motion.h4
                  className="text-3xl font-bold mb-4"
                  animate={{ 
                    y: [0, -5, 0] 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Tap to Connect
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-lg text-white/80 max-w-sm"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Simply tap your phone to instantly share your contact information with anyone
                </motion.p>

                {/* Additional Decorative Elements */}
                <motion.div
                  className="absolute bottom-6 right-6 text-white/40 text-sm"
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4] 
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  NFC Enabled
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4">Effortless Contact Sharing</h3>
            <p className="text-gray-300 text-lg">
              Share your contact information instantly with a simple tap. 
              No more fumbling with business cards or manually typing contact details.
            </p>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <motion.div
            initial={{ rotateY: 45, opacity: 0 }}
            animate={inView2 ? { rotateY: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative w-full aspect-square perspective-1000">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8"
                animate={{ rotateY: [0, 10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <div className="h-full flex flex-col justify-center items-center text-center">
                  {/* Design Icon */}
                  <motion.div
                    className="text-6xl mb-6"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8] 
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg 
                      className="w-24 h-24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                      />
                    </svg>
                  </motion.div>

                  {/* Main Text */}
                  <motion.h4
                    className="text-3xl font-bold mb-4"
                    animate={{ 
                      y: [0, -5, 0] 
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Custom Design
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-white/80 max-w-sm mb-8"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Create a unique digital card that perfectly represents your brand identity
                  </motion.p>

                  {/* Design Elements */}
                  <div className="flex gap-4 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-12 h-12 rounded-full bg-white/20"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5] 
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>

                  {/* Decorative Label */}
                  <motion.div
                    className="absolute bottom-6 right-6 text-white/40 text-sm"
                    animate={{ 
                      opacity: [0.4, 0.8, 0.4] 
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Customizable
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-4">Customizable for Your Brand</h3>
            <p className="text-gray-300 text-lg">
              Make your digital business card truly yours with customizable designs, 
              colors, and layouts that match your brand identity perfectly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}