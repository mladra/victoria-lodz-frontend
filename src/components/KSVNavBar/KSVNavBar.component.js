import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../logo.jpg';
import "./KSVNavBar.css";


const KSVNavBar = () => {
    return (
        <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Brand>
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
          <Nav.Link>Home</Nav.Link>
          <NavDropdown title="O klubie" id="about-club-nav-menu">
            <NavDropdown.Item>Historia</NavDropdown.Item>
            <NavDropdown.Item>Kadra</NavDropdown.Item>
            <NavDropdown.Item>Stroje</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Terminarz" id="schedule-nav-menu">
            <NavDropdown.Item>Pierwsza drużyna (Łódzka A klasa grupa I)</NavDropdown.Item>
            <NavDropdown.Item>Druga drużyna (Łódzka B klasa grupa I)</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tabela" id="standings-nav-menu">
            <NavDropdown.Item>Łódzka A klasa grupa I</NavDropdown.Item>
            <NavDropdown.Item>Łódzka B klasa grupa I</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default KSVNavBar;