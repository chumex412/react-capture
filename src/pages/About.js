import React from 'react';

// Animation 
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

// components
import AboutUsSection from '../components/AboutUsSection';
import ServiceSection from '../components/ServiceSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';

const About = () => {

  return (
    <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <AboutUsSection />
      <ServiceSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default About;