import React from "react";

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
           <span>Contact us for any photography or videography idea you may have.</span>
            <span>We have professionals with amazing skills to help you achieve it.</span>
          </p>
          <button>Contact us</button>
        </HeroHeader>
        
        <HeroImage>
          <img src={capture} alt="A man with a camera" />
        </HeroImage>
      </Content>
    </Hero>
  );
}

const HeroHeader = styled.div `
  flex: 1;
  h2 {
    span {
      color: #23d997;
    }
  }
  p {
    padding: 2rem 0;
    span {
      display: block;
      padding: 0.5rem 0;
    }
  }
`;

const HeroImage = styled(Image)`
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default AboutUsSection;