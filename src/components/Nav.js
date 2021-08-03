import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import style
import styled from 'styled-components';
import { Hero } from '../styles/styles';

// Components
import useMediaQuery from './useMediaQuery';


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pageWidth = useMediaQuery('(max-width: 768px)');

  const handleMenuDisplay = () => {
    setShowMenu(prev => !prev)
  };

  const closeMenu = () => setShowMenu(false);

  const openClose = showMenu ? "open" : '';

  return (
    <StyledNav>
      <NavContainer>
        <h1 className="h3">
          <Link to="/">
            Capture
          </Link>
        </h1>
        <NavList className={showMenu ? "show" : ""}>
          <li className="nav-list">
            <Link to="/" onClick={() => closeMenu()}>About</Link>
          </li>
          <li className="nav-list">
            <Link to="/services" onClick={() => closeMenu()}>Our services</Link>
          </li>
          <li className="nav-list">
            <Link to="/contact" onClick={() => closeMenu()}>Contact</Link>
          </li>
        </NavList>
        {
          pageWidth && <Button onClick={() => handleMenuDisplay()}>
            <Hamburger id="burgericon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 80">
              <g class="icon">
                <rect className={`firstbar ${openClose}`} x="10" y="10" width="70" height="12" rx="7" ry="7" fill="#23d997" />
                <rect className={`scndbar ${openClose}`} x="10" y="35" width="70" height="12" rx="7" ry="7" fill="#23d997" />
                <rect className={`thirdbar ${openClose}`} x="10" y="60" width="70" height="12" rx="7" ry="7" fill="#23d997" />
              </g>
            </Hamburger>
          </Button>
         }
      </NavContainer>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled(Hero)`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
  transition: all 0.5s ease-out;
  a {
    text-decoration: none;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.85);
    transform: translateX(150%);
    opacity: 0;

    &.show {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Hamburger = styled.svg`
  width: 2.5rem;
  height: 2rem;
  .firstbar, .scndbar, .thirdbar {
    transition: all 0.5s ease-out;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
  }
  .firstbar {
    transform-origin: 15% 45%;
  }
  .thirdbar {
    transform-origin: 20% 60%;
  }
  .open.firstbar {
    transform: rotateZ(45deg);
    _-webkit-transform: rotateZ(45deg);
    _-moz-transform: rotateZ(45deg);
  }

  .open.thirdbar {
    transform: rotateZ(-45deg);
    -webkit-transform: rotateZ(-45deg);
    -moz-transform: rotateZ(-45deg);
  }

  .open.scndbar {
    opacity: 0;
    width: 0;
  }
`;

export default Nav;