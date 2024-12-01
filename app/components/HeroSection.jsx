"use client"
import { motion } from 'framer-motion';
import BusinessCard from './BusinessCard';
import ScrollAnimation from './ ScrollAnimation';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Future of <span className="text-blue-500">Networking</span> is Here!
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            >
            Share your contact with just a tap.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold
            transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Get Notified
          </motion.button>
        </motion.div>
        
            </ScrollAnimation>
        <BusinessCard />
      </div>
    </div>
  );
}