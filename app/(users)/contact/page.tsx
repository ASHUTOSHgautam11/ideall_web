import ContactBanner from '@/app/(users)/components/ContactBanner';
import ContactForm from '@/app/(users)/components/ContactForm';
import ContactInfo from '@/app/(users)/components/ContactInfo';
import CoreValues from '@/app/(users)/components/CoreValues';
import WhyPartner from '@/app/(users)/components/WhyPartner';
import HeroVideoSection from '../components/HeroVideoSection';
import PartnershipOpportunities from '../components/PartnershipOpportunities';
import ContactDetails from '../components/ContactDetails';
export default function Contact() {
  return (
    <>
      <HeroVideoSection heading='Contact Us' description='Ready to discuss your procurement needs? Our team is here to help you navigate global markets 
              and source premium interior solutions.' videoSrc='/assets/video/video2.mp4' />
      <main>

        <section className="py-14 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Connect With Us
              </h1>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                Ready to discuss your procurement needs? Our team is here to help you navigate global markets
                and source premium interior solutions.
              </p>
            </div>
              <ContactDetails/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <ContactForm />
              <ContactInfo />
            </div>
            {/* <PartnershipOpportunities /> */}



          </div>
        </section>
        <WhyPartner />
        <ContactBanner />
        <CoreValues />
      </main>
    </>
  );
}

