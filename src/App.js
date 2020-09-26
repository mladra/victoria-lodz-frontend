import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KSVNavBar from './components/navbar/KSVNavBar.component';
import Home from './components/home/Home.component';
import { Route, BrowserRouter } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Standings from './components/standings/Standings.component';
import Contact from './components/contact/Contact.component';
import KSVFooter from './components/footer/KSVFooter.component';
import History from './components/about/History.component';

const App = () => {
  return (
    <BrowserRouter>
      <KSVNavBar />

      <main className="container flex-shrink-0" role="main">
        <Switch>
          <Route path={"/about"}>
            <History />
          </Route>
          <Route path="/schedule">
            <h2>Schedule</h2>
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>

      <KSVFooter />
    </BrowserRouter>
  );
};

export default App;
