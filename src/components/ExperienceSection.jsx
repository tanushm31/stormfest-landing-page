import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Section, GradientText } from '@/components/common';

const timeCurationData = [
  { time: "☀️ Day (10am–6pm)", theme: "Art exhibits, Talks, Installations, Wellness", vibe: "Mindful, Chill", audience: "Dreamers, Mid-budget", color: "bg-sky-600/80" },
  { time: "🌆 Evening (6–9pm)", theme: "Film Screenings, Auctions, Live Panels", vibe: "Elevated, Social", audience: "Mid+, Creatives, VVIP", color: "bg-indigo-600/80" },
  { time: "🌙 Night (9pm–2am)", theme: "Concerts, Fashion Shows, Afterparties", vibe: "High-Energy, Wild", audience: "Partygoers, VIPs, VVIP", color: "bg-purple-700/80" },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-gray-900/70" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-4"><GradientText>🌗 Time-Based Experience</GradientText></h2>
      <p className="text-lg md:text-xl text-center text-gray-400 mb-12">Curated Day vs. Night Experiences</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {timeCurationData.map(item => (
          <motion.div
            key={item.time}
            className={`p-6 rounded-xl shadow-2xl ${item.color} text-white flex flex-col h-full`}
            whileHover={{ y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.25)" }}
            transition={{ duration: 0.3 }}
            role="article"
            aria-labelledby={`experience-time-${item.time.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <Clock aria-hidden="true" className="w-8 h-8 md:w-10 md:h-10 mb-4 opacity-80" />
            <h3 id={`experience-time-${item.time.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl md:text-2xl font-semibold mb-2">{item.time}</h3>
            <p className="text-base md:text-lg font-medium mb-1">{item.theme}</p>
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-300 mb-3">{item.vibe}</p>
            <p className="mt-auto text-xs md:text-sm bg-black/30 px-3 py-1 rounded-full self-start">🎯 {item.audience}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 md:mt-20" aria-labelledby="scheduling-heading">
        <h3 id="scheduling-heading" className="text-2xl md:text-3xl font-bold text-center mb-10"><GradientText>🧠 Smart Scheduling</GradientText></h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-base md:text-lg text-gray-300">
            <p>Events grouped into themed tracks:</p>
            <ul className="list-disc list-inside space-y-2 pl-5 marker:text-pink-400">
              <li>🎶 Music</li>
              <li>🎨 Art</li>
              <li>🧠 Thought</li>
              <li>🧬 Experimentation</li>
            </ul>
            <p>Flagship event per track per slot.</p>
            <p>Dynamic mobile/web app for:</p>
            <ul className="list-disc list-inside space-y-2 pl-5 marker:text-pink-400">
              <li>Live map navigation</li>
              <li>Personalized schedule builder</li>
              <li>FOMO-reduction alerts</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md h-auto object-cover"
              alt="Mockup of a festival mobile application interface displaying a personalized schedule and map."
              src="https://images.unsplash.com/photo-1663661746218-b46d343e8f4e" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;