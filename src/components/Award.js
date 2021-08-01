import React from 'react';

// Styles
import styled from 'styled-components';
import { Line } from '../styles/styles';

const Award = ({title, description}) => {

  return (
    <StyledAward>
      <h3 className="h4">{title}</h3>
      <AwardLine></AwardLine>
      <p className="parag">{description}</p>
    </StyledAward>
  );
};

const AwardLine = styled(Line)`
  background-color: #23d997;
`;

const StyledAward = styled.div`
  flex-basis: 25.333%;
  color: #fff;

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export default Award;