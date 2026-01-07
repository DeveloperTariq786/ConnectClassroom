import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedTuitions from './FeaturedTuitions';
import HowItWorks from './HowItWorks';
import TrustSection from './TrustSection';
import OwnerCta from './OwnerCta';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedTuitions />
      <HowItWorks />
      <TrustSection />
      <OwnerCta />
    </>
  );
};

export default LandingPage;