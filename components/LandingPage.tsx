import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedTuitions from './FeaturedTuitions';
import HowItWorks from './HowItWorks';
import TrustSection from './TrustSection';
import OwnerCta from './OwnerCta';

const LandingPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Small timeout to ensure DOM is ready and layout is stable
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

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