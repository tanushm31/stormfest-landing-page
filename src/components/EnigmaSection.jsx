import React from 'react';
import { motion } from 'framer-motion';
import { Section, GradientText } from '@/components/common';

const enigmaPointsData = [
  "🕰️ Timeless — Ancient wisdom meets future tech",
  "🎬 Cinematic — Feels like you’re inside a film",
  "🎡 Multiverse — Different worlds for different minds",
  "🌍 Inclusive — Bridging regional, national & global culture"
];

const EnigmaSection = () => {
  return (
    <Section id="enigma" className="bg-gray-900/50 relative overflow-hidden" aria-labelledby="enigma-heading">
      <div className="absolute -bottom-1/3 -left-1/4 w-full h-full opacity-10" aria-hidden="true">
         <img  alt="Abstract swirling patterns representing the enigma of Stormcrew, with dark and mysterious tones." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560510368-611be7ca72cd" />
      </div>
      <div className="relative z-10 text-center">
        <h2 id="enigma-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"><GradientText>🌀 The Enigma of Stormcrew</GradientText></h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-xl md:max-w-4xl mx-auto mb-10">
          {enigmaPointsData.map((point, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 bg-gray-800/60 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/50"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <p className="text-base md:text-lg text-gray-200">{point}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold">
          <GradientText>Old money meets Gen Z. Moms meet moguls. Creators meet collectors.</GradientText>
        </p>
      </div>
    </Section>
  );
};

export default EnigmaSection;