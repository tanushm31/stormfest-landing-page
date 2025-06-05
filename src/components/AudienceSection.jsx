import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Users2, Diamond } from 'lucide-react';
import { Section, GradientText } from '@/components/common';

const audienceSegmentsData = [
  { group: "💭 Dollar & a Dream Club", traits: "Low budget, high curiosity, youth-heavy", design: "Free tracks, gamified side quests, creators’ stage", icon: <Lightbulb aria-hidden="true" className="w-8 h-8 text-green-400" /> },
  { group: "🎒 Mid Money", traits: "Budget-conscious, open to newness", design: "Tiered passes, workshop access, daytime fun", icon: <Users aria-hidden="true" className="w-8 h-8 text-blue-400" /> },
  { group: "🧢 Mid Money ++", traits: "Trendy, up for premium fun", design: "Afterparty invites, VIP queues, merchandise perks", icon: <Users2 aria-hidden="true" className="w-8 h-8 text-purple-400" /> },
  { group: "👑 VVVIP", traits: "High net worth, elite, socialites", design: "Art auctions, concierge zones, luxury lounges", icon: <Diamond aria-hidden="true" className="w-8 h-8 text-pink-400" /> },
];

const AudienceSection = () => {
  return (
    <Section id="audience" className="bg-gradient-to-tr from-gray-900 via-indigo-900 to-black" aria-labelledby="audience-heading">
      <h2 id="audience-heading" className="text-3xl md:text-4xl font-bold text-center mb-12"><GradientText>👥 Audience Segments</GradientText></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {audienceSegmentsData.map(segment => (
          <Card key={segment.group} className="bg-slate-800/50 border-indigo-500/40 shadow-indigo-500/20 flex flex-col text-center h-full p-4 md:p-6" role="article" aria-labelledby={`segment-title-${segment.group.replace(/\s+/g, '-').toLowerCase()}`}>
            <CardHeader className="items-center !p-2 md:!p-4">
              {segment.icon}
              <CardTitle id={`segment-title-${segment.group.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl md:text-2xl text-gray-100 mt-2">{segment.group}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow !p-2 md:!p-4">
              <p className="text-gray-400 italic mb-3 text-xs md:text-sm">&quot;{segment.traits}&quot;</p>
              <p className="text-gray-200 text-sm md:text-base">{segment.design}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default AudienceSection;