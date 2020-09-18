import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HouseDoor } from "react-bootstrap-icons";
import logo from '../../logo.jpg';
import "./KSVNavBar.css";


const KSVNavBar = () => {

  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Navbar.Brand href="/" className="handwriting">
        <img
          alt=""
          src={logo}
          width="30px"
          height="30px"
          className="d-inline-block align-top"
        />
        {'  '}Victoria Łódź
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <HouseDoor size="24" />
          </Nav.Link>
          <NavDropdown title="O klubie" id="about-club-nav-menu">
            <NavDropdown.Item href="/about">Historia</NavDropdown.Item>
            <NavDropdown.Item href="/about">Kadra</NavDropdown.Item>
            <NavDropdown.Item href="/about">Stroje</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Terminarz" id="schedule-nav-menu">
            <NavDropdown.Item href="/schedule">Pierwsza drużyna (Łódzka A klasa grupa I)</NavDropdown.Item>
            <NavDropdown.Item href="/schedule">Druga drużyna (Łódzka B klasa grupa I)</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tabela" id="standings-nav-menu">
            <NavDropdown.Item href="/standings/first-team">Łódzka A klasa grupa I</NavDropdown.Item>
            <NavDropdown.Item href="/standings/second-team">Łódzka B klasa grupa I</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default KSVNavBar;