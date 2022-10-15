import React from "react";
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import Logo from "./logo";

const Header = () => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav>
                <NavLink
                  href="/about"
                >
                  About
                </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header