import React from 'react';

// Components
import { useScroll } from './useScroll';

// Animation
import { scrollReveal } from './animation';

// Import icons
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import diaphragm from '../img/diaphragm.svg';
import home2 from '../img/home2.png';

// Import styles
import styled from 'styled-components';
import { Hero, Content, Image, Description } from '../styles/styles';


const ServiceSection = () => {

  const [element, controls] = useScroll();

  return (
    <Services variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <ServicesContent>
        <ServicesImg>
          <img src={home2} alt="Camera" />
        </ServicesImg>
        <ServicesDesc>
          <header>
            <h2 className="h2">
              High <span>quality</span>
            </h2>
            <h2 className="h2">services</h2>
          </header>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="Clock icon" />
                <h3 className="parag">Efficient</h3>
              </div>
              <div className="card-body">
                <p className="parag">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, corporis.
                </p>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="Money icon" />
                <h3 className="parag">Affordable</h3>
              </div>
              <div className="card-body">
                <p className="parag">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, corporis.
                </p>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="Diaphragm icon" />
                <h3 className="parag">Pro Grade Gear</h3>
              </div>
              <div className="card-body">
                <p className="parag">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, corporis.
                </p>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="Teamwork icon" />
                <h3 className="parag">Teamwork</h3>
              </div>
              <div className="card-body">
                <p className="parag">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, corporis.
                </p>
              </div>
            </Card>
          </Cards>
        </ServicesDesc>
      </ServicesContent>
    </Services>
  );
}

const Services = styled(Hero)`
  padding: 4rem 1.5rem;
  header {
    padding: 2rem;
  }
`;

const ServicesContent = styled(Content)`
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServicesImg = styled(Image)`
  @media only screen and (max-width: 960px) {
    order: 2;
    width: 100%;
    padding: 1.5rem 0;

    img {
      width: 100%;
    }
  }
`;

const ServicesDesc = styled(Description)`
  @media only screen and (max-width: 960px) {
    order: 1;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2rem;
`;

const Card = styled.div`
  flex-basis: 48.5%;
  margin: 1.5rem 0;
  .icon {
    display: flex;
    align-items: center;
    img {
      width: 5rem;
      height: 5rem;
    }

    h3 {
      background: #fff;
      color: #333;
      padding: 1rem;
      margin-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 540px) {
    flex-basis: 100%;
    text-align: center;

    .icon {
      justify-content: center;
    }
  }
`;

export default ServiceSection;