import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  width: 100%;
  padding: 10px 20px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001; /* Ensure it stays above other content */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
