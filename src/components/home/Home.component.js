import React from "react";
import logo from '../../logo.jpg';
import "./Home.css";


const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="logo-container mb-4">
                    <img src={logo} className="app-logo" alt="logo" />
                </div>
                <h1 className="handwriting mb-4">Victoria Łódź</h1>
                <p>Victoria Łódź to drużyna piłkarska z furą pomysłów i permanentnym brakiem funduszy.</p>
            </div>
        </div>
    );
};

export default Home;