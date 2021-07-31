import React from 'react';
import { Link } from 'react-router-dom';

// Images
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';

// Styles
import styled from 'styled-components';
import { Hero, Content } from '../styles/styles';

const OurServices = () => {

  return (
    <Services>
      <ServiceContent>
        <header>
          <h2 className="h3">The Athlete</h2>
        </header>
        <div className="line"></div>
        <Link to="/services/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </ServiceContent>

      <ServiceContent>
        <header>
          <h2 className="h3">The Racer</h2>
        </header>
        <div className="line"></div>
        <Link to="/services/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </ServiceContent>

      <ServiceContent>
        <header>
          <h2 className="h3">The Goodtimes</h2>
        </header>
        <div className="line"></div>
        <Link to="/services/good-times">
          <img src={goodtimes} alt="Goodtimes" />
        </Link>
      </ServiceContent>
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
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;


export default OurServices;