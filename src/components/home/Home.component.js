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
                <h1 className="mb-4">Victoria Łódź</h1>
                <p>Nazwa "Victoria" jest obecna na sportowej mapie Łodzi od stycznia 1908 roku, kiedy to niemieccy mieszkańcy naszego miasta, reprezentujący warstwy mieszczańskie i robotnicze, założyli Lodzer Fussball Club "Victoria". Statut klubu został zatwierdzony 23 marca 1908 roku. Klub w swojej pierwotnej postaci działał do 1914 roku. Po I Wojnie Światowej nie został reaktywowany. Po II Wojnie Światowej "Victoria" jest wymieniana w gronie klubów połączonych w jeden, nowy twór - Włókniarza Łódź. Po transformacji ustrojowej, w roku 1990 Victoria wyodrębnia się ze struktur Włókniarza, przejmuje jego sekcje piłkarskie i jako Victoria-Włókniarz spędza m.in. trzy sezony w IV lidze. Współpraca klubów kończy się po spadku w sezonie 1995/96. Dnia 12 grudnia 1996 roku powstaje "Victoria", jaką oglądamy obecnie. Pierwszym prezesem zostaje Grzegorz Hynek, pełniący swoją funkcję do końca sezonu 2007/08. Jego następcą zostaje Łukasz Walczak, który pełni swoją funkcję po dzień dzisiejszy. Od sezonu 2014/15 wobec zainstalowania klubu w nowej siedzibie na ul. Potokowej 12, Klub dokonuje retuszu nazwy na Klub Sportowy "Victoria" Stoki (Łódź).</p>
            </div>
        </div>
    );
};

export default Home;