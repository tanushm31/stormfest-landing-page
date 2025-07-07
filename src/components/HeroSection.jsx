import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, CalendarDays } from 'lucide-react';
import { Section, GradientText } from '@/components/common';

const HeroSection = () => {
  return (
    <Section className="!pt-28 md:!pt-40 bg-cover bg-center relative" id="hero" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-[-1]" aria-hidden="true">
        <img
          className="object-cover w-full h-full"
          alt="Crowd enjoying a high-energy night festival"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&h=1080&q=80" />
        <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply opacity-50"></div>
        <div className="absolute inset-0 bg-pink-600 mix-blend-screen opacity-40"></div>
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="inline-block rounded-3xl border border-white/30 bg-black/40 backdrop-blur-md px-6 py-4 mb-6"
        >
          <h1
            id="hero-heading"
            className="neon-text text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight uppercase"
          >
            STORMFEST
          </h1>
        </motion.div>
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl mt-2 font-medium text-gray-200"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The Cultural Supernova of the Century
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8 text-md md:text-lg text-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center"><MapPin aria-hidden="true" className="w-5 h-5 mr-2 text-purple-400" /> NCR</div>
          <div className="flex items-center"><CalendarDays aria-hidden="true" className="w-5 h-5 mr-2 text-pink-400" /> 29th–31st Dec (Main Event +- 1 Day)</div>
        </motion.div>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-xs sm:max-w-md md:max-w-3xl mx-auto px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          A once-in-a-century cultural supernova combining Music, Art, Networking, and Legacy by Stormcrew.
          <br />
          <span className="italic text-gray-400">Jiska saath, uska vikaas (ya koshish?) Stick around and find out.</span>
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl transform hover:scale-105 transition-transform duration-300 px-6 py-3 md:px-8 md:py-3 text-base md:text-lg">
            Explore the Storm
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;