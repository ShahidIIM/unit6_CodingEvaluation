import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: black;
  color: white;
  padding: 20px;
`;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <NavbarWrapper>
      <Link data-cy="navbar-home-link" to="/">HOME</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button"></button>
      </NavbarWrapper>
    </div>
  );
};

export default Navbar;

