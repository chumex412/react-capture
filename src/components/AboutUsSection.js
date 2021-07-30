import React from "react";

// Import images
import capture from '../img/home1.png';

// Import styles
import styled from 'styled-components';
import { Hero, Hide } from "../styles/styles";

const AboutUsSection = () => {

  return (
    <Hero>
      <HeroContent>
        <HeroHeader>
          <Hide>
            <h2 className="h2">
              We work to make
            </h2>
          </Hide>
          <Hide>
            <h2 className="h2">
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2 className="h2">
              true
            </h2>
          </Hide>
          <p className="parag">
            Contact us for any photography or videography idea you may have.
            We have professionals with amazing skills to help you achieve it.
          </p>
          <button>Contact us</button>
        </HeroHeader>
        
        <HeroImage>
          <img src={capture} alt="A man with a camera" />
        </HeroImage>
      </HeroContent>
    </Hero>
  );
}

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
`;

const HeroHeader = styled.div `
  flex: 1;
  p {
    padding-right: 5rem;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default AboutUsSection;