'use client';

import HeroVideoSection from '../components/HeroVideoSection';
import WhyPartner from '../components/WhyPartner';
import ContactBanner from '../components/ContactBanner';
import CoreValues from '../components/CoreValues';
import PartnershipOpportunities from '../components/PartnershipOpportunities';
import CareerInfo from '../components/CareerInfo';

export default function Career() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroVideoSection
        heading="Join Our Team & Shape the Future"
        description="We are looking for passionate individuals who want to make a difference. Discover opportunities to grow your career while building products that impact millions of users worldwide."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* CAREER SECTION */}
      <CareerInfo />

      {/* CULTURE / GROWTH SECTION */}
      {/* If you want to use cultureRef, tell me, I'll add proper scroll handling */}
      {/* <div ref={cultureRef}>
        <PartnershipOpportunities />
      </div> */}

      {/* WHY PARTNER SECTION */}
      <WhyPartner />

      {/* CONTACT BANNER */}
      <ContactBanner />

      {/* CORE VALUES */}
      <CoreValues />
    </>
  );
}
