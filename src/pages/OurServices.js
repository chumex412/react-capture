import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

// Images
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';

// Styles
import styled from 'styled-components';
import { Hero, Content } from '../styles/styles';

// Animation 
import { motion } from 'framer-motion';
import { pageAnimation, photoAnim, fade, lineAnim, slider, sliderContainer } from '../components/animation';

const OurServices = () => {

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Services variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <ServiceContent>
        <header>
          <motion.h2 variants={fade} className="h3">The Athlete</motion.h2>
        </header>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/services/the-athlete">
          <motion.img variants={photoAnim} src={athlete} alt="Athlete" />
        </Link>
      </ServiceContent>

      <ServiceContent ref={element} variants={fade} animate={controls} initial="hidden">
        <header>
          <h2 className="h3">The Racer</h2>
        </header>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/services/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </ServiceContent>

      <ServiceContent  ref={element2} variants={fade} animate={controls2} initial="hidden">
        <header>
          <h2 className="h3">The Goodtimes</h2>
        </header>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/services/good-times">
          <img src={goodtimes} alt="Goodtimes" />
        </Link>
      </ServiceContent>
      <ScrollTop />
    </Services>
  );
};

const Services = styled(Hero)`
  padding: 1.5rem;
  overflow: hidden;
  
`;

const ServiceContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;
  .line {
    height: 0.5rem;
    background: #cccccc;
    width: 100%;
  }
  a {
    width: 100%;
    overflow: hidden;
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90vh;
  z-index: 2;
  background-color: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2fb;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurServices;