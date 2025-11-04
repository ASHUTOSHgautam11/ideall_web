import Hero from '@/app/(users)/components/Hero';
import TradeSpecializations from '@/app/(users)/components/TradeSpecializations';
import WhyPartner from '@/app/(users)/components/WhyPartner';
import ContactBanner from '@/app/(users)/components/ContactBanner';
import Slider from '@/app/(users)/components/Slider';
import Slider1 from '@/app/(users)/components/Slider1';
import { Sedgwick_Ave_Display } from 'next/font/google';
import { LucideSliders } from 'lucide-react';
import TrustedByGlobal from '@/app/(users)/components/TrustedByGlobal';
import AboutHome from '@/app/(users)/components/AboutHome';
import Feature7 from '@/app/(users)/components/Feature7';
import HomeHero from './components/HomeHero';
export default function Home() {
  return (
    <>
      <main>
        {/* <HomeHero/> */}
        <Slider />
        {/* <Feature7/> */}
        <TrustedByGlobal />
        <AboutHome />
        {/* <Hero /> */}
        <TradeSpecializations />
        {/* <Slider1/> */}
        <WhyPartner />
        <ContactBanner />
      </main>
    </>
  );
}      