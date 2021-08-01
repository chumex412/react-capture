import React from "react";

// Components
import Wave from "./Wave";

// Animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "./animation";

// Import images
import capture from '../img/home1.png';

// Import styles
import styled from 'styled-components';
import { Hero, Content, Image, Hide } from "../styles/styles";

const AboutUsSection = () => {

  return (
    <Hero>
      <Content>
        <HeroHeader>
          <Hide>
            <motion.h2 variants={titleAnim} className="h2">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className="h2">
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className="h2">
              true.
            </motion.h2>
          </Hide>
          <motion.p variants={fade} className="parag">
            <span>Contact us for any photography or videography idea you may have.</span>
            <span>We have professionals with amazing skills to help you achieve it.</span>
          </motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </HeroHeader>
        
        <HeroImage>
          <motion.img src={capture} variants={photoAnim} alt="A man with a camera" />
        </HeroImage>
        <Wave />
      </Content>
    </Hero>
  );
}

const HeroHeader = styled.div `
  flex: 1;
  h2 {
    span {
      color: #23d997;
      z-index: 5;
    }
  }
  p {
    padding: 2rem 0;
    span {
      display: block;
      padding: 0.5rem 0;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 3rem 0;
    text-align: center;
  }
`;

const HeroImage = styled(Image)`
  z-index: 5;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default AboutUsSection;