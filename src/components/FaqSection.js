import React from 'react';

// Animation
import { AnimateSharedLayout } from 'framer-motion';
import { scrollReveal } from './animation';

// Components
import Toggle from './Toggle';
import { useScroll } from './useScroll';

// Import styles
import styled from 'styled-components';
import { Hero, Content } from '../styles/styles';

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <header>
        <h2 className="h3">
          Any questions? <span> FAQ </span>     
        </h2>
      </header>
      <FaqContent>
        <AnimateSharedLayout>
          <Toggle title="How do i start?">
            <div className="answer">
              <p className="parag">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
              </p>
            </div>
          </Toggle>
  
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p className="parag">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
              </p>
            </div>
          </Toggle>
          
          <Toggle title="Different payment method">
            <div className="answer">
              <p className="parag">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
              </p>
            </div>
          </Toggle>
          
          <Toggle title="What product do you offer.">
            <div className="answer">
              <p className="parag">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </FaqContent>
    </Faq>
  );
}

const Faq = styled(Hero)`
  padding: 3rem 1.5rem;
  color: #fff;
  header {
    span {
      color: #23d997;
    }
  }
`;

const FaqContent = styled(Content)`
  display: block;
  .question {
    padding: 2rem 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

export default FaqSection;