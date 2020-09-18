import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KSVNavBar from './components/KSVNavBar/KSVNavBar.component';
import Home from './components/home/Home.component';

const App = () => {
  return (<>
    <KSVNavBar />
    <Home />
  </>);
};

export default App;
