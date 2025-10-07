import StoryHero from '@/app/(users)/components/StoryHero';
import CompanyTimeline from '@/app/(users)/components/CompanyTimeline';
import CoreValues from '@/app/(users)/components/CoreValues';
import Mission from '@/app/(users)/components/Mission';
import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import StoryHeroSection from '@/app/(users)/components/StoryHeroSection';
import WhatSetsUsApart from '@/app/(users)/components/WhatSetsUsApart';
import OurProcess from '@/app/(users)/components/OurProcess';
 

export default function OurStory() {
  return (
    <main>

      {/* <HeroVideoSection /> */}
      <StoryHeroSection />
      <CoreValues />
      <WhatSetsUsApart/>
      <StoryHero />
      <OurProcess/>
      <CompanyTimeline />
      <Mission />
    </main>
  );
}