import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

export default function Header() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo>
            <strong>KU</strong> place
          </Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/building">Building</Nav.Link>
            <Nav.Link href="/tag">Tag</Nav.Link>
            <Nav.Link href="/mypage">My Page</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const Logo = styled.span`
  color: red;
`;
