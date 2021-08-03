import React from 'react';

//Component
import { Hide } from '../styles/styles';

// Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../components/animation';

// Style
import styled from 'styled-components';
import { Hero } from '../styles/styles';


const Contact = () => {

  return (
    <StyledContact variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <h2 className="h3">Get in touch</h2>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <h3 className="h4">Send us a message</h3>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <h3 className="h4">Send an email</h3>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <h3 className="h4">Social media</h3>
        </Social>
      </Hide>
    </StyledContact>
  );
};

const StyledContact = styled(Hero)`
  padding: 1.5rem;
  color: #fff
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 2.5rem 0;
  h3 {
    padding: 0 1.5rem
  }
`;

const Circle = styled.div`
  background-color: #23d997;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export default Contact;
