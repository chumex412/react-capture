import React from 'react';

// Import style
import styled from 'styled-components';
import { Hero } from '../styles/styles';


const Nav = () => {


  return (
    <StyledNav>
      <NavContainer>
        <h1 className="h3">
          Capture
        </h1>
        <NavList>
          <li className="nav-list">
            <a href="">About</a>
          </li>
          <li className="nav-list">
            <a href="">Our Services</a>
          </li>
          <li className="nav-list">
            <a href="">Contact</a>
          </li>
        </NavList>
      </NavContainer>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: #282828;
`;

const NavContainer = styled(Hero)`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    flex-basis: 64.33%;
    color: #fff;
  }
`;

const NavList = styled.ul`
  flex-basis: 32.33%;
  list-style: none;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default Nav;