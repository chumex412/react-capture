import React from 'react';

// Import styles
import styled from 'styled-components';
import { Hero, Content } from '../styles/styles';

const FaqSection = () => {

  return (
    <Faq>
      <header>
        <h2 className="h3">
          Any questions? <span> FAQ </span>     
        </h2>
      </header>
      <FaqContent>
        <div className="question">
          <h3 className="h4">
            How do i start?
          </h3>
          <div className="answer">
            <p className="parag">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="parag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
            </p>
          </div>
          <FaqLine></FaqLine>
        </div>

        <div className="question">
          <h3 className="h4">
            Daily Schedule
          </h3>
          <div className="answer">
            <p className="parag">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="parag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
            </p>
          </div>
          <FaqLine></FaqLine>
        </div>
        
        <div className="question">
          <h3 className="h4">
            Different payment method
          </h3>
          <div className="answer">
            <p className="parag">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="parag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
            </p>
          </div>
          <FaqLine></FaqLine>
        </div>
        
        <div className="question">
          <h3 className="h4">
            What product do you offer.
          </h3>
          <div className="answer">
            <p className="parag">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="parag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi!
            </p>
          </div>
          <FaqLine></FaqLine>
        </div>
      </FaqContent>
    </Faq>
  );
}

const Faq = styled(Hero)`
  padding: 3rem 1.5rem;
  color: #fff;
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

const FaqLine = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #fff;
  margin-top: 1.5rem;
`;

export default FaqSection;