import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, Award, Rocket } from 'lucide-react';
import { Section, GradientText } from '@/components/common';

const leadershipPrinciplesData = [
  { title: "Be a Leader", icon: <TrendingUp aria-hidden="true" className="w-8 h-8 text-purple-400" />, description: "Trendsetter, creator, curator." },
  { title: "Ownership", icon: <Award aria-hidden="true" className="w-8 h-8 text-pink-400" />, description: "Take full responsibility in work." },
  { title: "Smart Contracts", icon: <Rocket aria-hidden="true" className="w-8 h-8 text-orange-400" />, description: "Contracts ❌ | Smart Contracts ✅" },
];

const MissionSection = () => {
  return (
    <Section id="mission" className="bg-gray-900/50" aria-labelledby="mission-heading">
      <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-center mb-12"><GradientText>Purpose & Leadership</GradientText></h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <Card className="bg-slate-800/30 border-purple-500/30 shadow-purple-500/10">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-pink-400">🎯 Purpose Statement</CardTitle>
            <CardDescription className="text-base md:text-lg text-gray-300">18+ Event</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-3 text-base md:text-lg">
            <p>Stormfest is an immersive 3-day experience blending:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 marker:text-purple-400">
              <li>🎤 Music (local to global, indie to headliners)</li>
              <li>🎨 Art (fine art, digital installations, performance art: Comedy, Sports)</li>
              <li>🧠 Thought (talks, exhibitions, workshops)</li>
              <li>🕺 Culture (fashion, food, dance, rituals)</li>
            </ul>
            <p className="font-semibold mt-4">
              It’s <GradientText>Rolling Loud × Coachella × Da Vinci × Hans Zimmer × Ramanujan × Inception</GradientText>, reimagined for India and the world.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/30 border-pink-500/30 shadow-pink-500/10">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-purple-400">🚀 Leadership Principles</CardTitle>
             <CardDescription className="text-base md:text-lg text-gray-300">Guiding SC Enterprise</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {leadershipPrinciplesData.map(principle => (
              <motion.div
                key={principle.title}
                className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg"
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
                role="listitem"
              >
                <div className="flex-shrink-0" aria-hidden="true">{principle.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-gray-100">{principle.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default MissionSection;