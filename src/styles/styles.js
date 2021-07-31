import styled from 'styled-components';

export const Hero = styled.section`
  padding: 0 1.5rem;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
  color: #fff;
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