import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const Wave = () => {

  return (
    <WaveSvg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 363">
      <motion.path
       initial={{ pathLength: 0, pathOffset: 1 }}
       animate={{ pathLength: 1, pathOffset: 0 }}
       transition={{ duration: 1 }}
       d="M1440 27.5c-87.3-7.7-317.6 21.6-540.7 199.8-278.8 222.8-545 128.3-729-42C23.2 49.1-4.2 8.3.5 5" stroke="#D96ED4"
       strokeWidth="10"
       strokeOpacity="0.5"
      />
    </WaveSvg>

  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    top: 20%;
  }
`;

export default Wave;