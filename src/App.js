import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (<>
    <Navbar bg="transparent" expand="lg" fixed="top">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="30px"
          height="30px"
          lassName="d-inline-block align-top"
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
    <div className="App">
      <header className="App-header">
        <div className="logo-container mb-4">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1 className="mb-4">Victoria Łódź</h1>
        <p>Nazwa "Victoria" jest obecna na sportowej mapie Łodzi od stycznia 1908 roku, kiedy to niemieccy mieszkańcy naszego miasta, reprezentujący warstwy mieszczańskie i robotnicze, założyli Lodzer Fussball Club "Victoria". Statut klubu został zatwierdzony 23 marca 1908 roku. Klub w swojej pierwotnej postaci działał do 1914 roku. Po I Wojnie Światowej nie został reaktywowany. Po II Wojnie Światowej "Victoria" jest wymieniana w gronie klubów połączonych w jeden, nowy twór - Włókniarza Łódź. Po transformacji ustrojowej, w roku 1990 Victoria wyodrębnia się ze struktur Włókniarza, przejmuje jego sekcje piłkarskie i jako Victoria-Włókniarz spędza m.in. trzy sezony w IV lidze. Współpraca klubów kończy się po spadku w sezonie 1995/96. Dnia 12 grudnia 1996 roku powstaje "Victoria", jaką oglądamy obecnie. Pierwszym prezesem zostaje Grzegorz Hynek, pełniący swoją funkcję do końca sezonu 2007/08. Jego następcą zostaje Łukasz Walczak, który pełni swoją funkcję po dzień dzisiejszy. Od sezonu 2014/15 wobec zainstalowania klubu w nowej siedzibie na ul. Potokowej 12, Klub dokonuje retuszu nazwy na Klub Sportowy "Victoria" Stoki (Łódź).</p>
      </header>
    </div>
  </>);
};

export default App;
