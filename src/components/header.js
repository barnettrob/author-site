import React, { useState } from "react";
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import Logo from "./logo";
import CloseButton from "react-bootstrap/CloseButton";

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const overrideToggle = () => {
    setExpanded(prevExpanded => !prevExpanded)
  }

  return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={expanded} onToggle={overrideToggle}>
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            {expanded && (
              <CloseButton />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <NavLink
                  href="/about"
                >
                  About
                </NavLink>
                <NavLink
                  href="/blogs"
                >
                  Blog
                </NavLink>
                <NavLink
                  href="/upcoming-book"
                >
                  Upcoming Book
                </NavLink>
                <NavLink
                  href="/events"
                >
                  Events
                </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header