import styled from 'styled-components';

// Animation
import { motion } from 'framer-motion';

export const Hero = styled(motion.section)`
  padding: 0 1.5rem;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
  color: #fff;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Description = styled.div`
  flex: 1;
  h2 {
    span {
      color: #23d997;
    }
  }
  p {
    padding: 2rem 0;
  }
`;

export const Line = styled.div `
  width: 100%;
  height: 0.5rem;
  background-color: #fff;
  margin: 1.5rem 0;
`;