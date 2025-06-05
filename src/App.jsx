import React from 'react';
import { PageLayout } from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import ExperienceSection from '@/components/ExperienceSection';
import AudienceSection from '@/components/AudienceSection';
import EnigmaSection from '@/components/EnigmaSection';
import LegalSection from '@/components/LegalSection';

const App = () => {
  return (
    <PageLayout>
      <HeroSection />
      <MissionSection />
      <PrinciplesSection />
      <ExperienceSection />
      <AudienceSection />
      <EnigmaSection />
      <LegalSection />
    </PageLayout>
  );
};

export default App;