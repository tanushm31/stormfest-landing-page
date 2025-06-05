import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Sparkles } from 'lucide-react';
import { Section, GradientText } from '@/components/common';

const corePrinciplesData = [
  {
    title: "Value Maximization",
    icon: <Zap aria-hidden="true" className="w-10 h-10 mb-4 text-yellow-400" />,
    points: [
      { category: "💸 Money Wise", items: ["Tiered access (Freeish → Premium → VVIP)", "Brand-sponsored zones + surprise perks", "Affordable food + bundled experiences"] },
      { category: "🕒 Time Wise", items: ["Minimal event clashes", "Classified zones: Music / Art / Movement / Thought", "Curated day vs night experiences"] },
      { category: "🔋 Effort Wise", items: ["Side quests to unlock rewards", "Secret events + invite-only zones", "Daily afterparties, discovery zones, flash mobs"] },
    ]
  },
  {
    title: "Cultural Integration",
    icon: <Sparkles aria-hidden="true" className="w-10 h-10 mb-4 text-teal-400" />,
    layers: [
      { name: "🌾 Regional", description: "Folk + regional indie artists, cuisine pop-ups" },
      { name: "🇮🇳 National", description: "Curated fashion / art / music stage shows – India through the decades" },
      { name: "🌍 Global", description: "Afrobeat to techno, Da Vinci to Dali, NFTs to Ramanujan pop-theorems" },
    ]
  }
];

const PrinciplesSection = () => {
  return (
    <Section id="principles" className="bg-gradient-to-b from-purple-900/30 via-gray-900 to-black" aria-labelledby="principles-heading">
      <h2 id="principles-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"><GradientText>🔥 Core Principles</GradientText></h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {corePrinciplesData.map(principle => (
          <Card key={principle.title} className="bg-slate-800/40 border-gray-700/50 shadow-xl transform hover:scale-102 transition-transform duration-300">
            <CardHeader className="items-center text-center">
              {principle.icon}
              <CardTitle className="text-2xl md:text-3xl text-gray-100">{principle.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm md:text-base">
              {principle.points && principle.points.map(pointCategory => (
                <div key={pointCategory.category} className="mb-6">
                  <h3 className="font-semibold text-lg md:text-xl text-yellow-300 mb-2">{pointCategory.category}</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4 marker:text-yellow-500">
                    {pointCategory.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
              {principle.layers && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <caption className="sr-only">Cultural Integration Layers</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="border-b border-gray-600 p-2 text-teal-300">Layer</th>
                        <th scope="col" className="border-b border-gray-600 p-2 text-teal-300">What it Includes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {principle.layers.map(layer => (
                        <tr key={layer.name}>
                          <td className="border-b border-gray-700 p-2 font-medium">{layer.name}</td>
                          <td className="border-b border-gray-700 p-2">{layer.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PrinciplesSection;