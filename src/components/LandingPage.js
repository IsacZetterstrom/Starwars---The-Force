// import ApiFetch from "./components/ApiFetch";
import React from "react";
import '../styles/Home.css';
// import starwarsimg from '../assets/star.wars.jpg'
import { Link } from 'react-router-dom';
// import FetchAPI from "./components/ApiFetch";
// import InfoPage from "./components/InfoPage";

export default function Home() {
    return (

        <div className="testmall">

             <div className="headerContainer">
                <img className="headerImg" src="./assets/img/starwars.jpg" alt="starWars"></img>
             </div>
             <h1 className="headerText">Epic Starwars wikipedia</h1>
             <ul className="menu">
                <li>
                    <Link to="/">PEOPLE</Link>
                </li>
                <li>
                    <Link to="/InfoPage">PLANETS</Link>
                </li>
                <li>
                    <Link to="/">FILMS</Link>
                </li>
                <li>
                    <Link to="/">SPECIES</Link>
                </li>
                <li>
                    <Link to="/">VEHICLES</Link>
                </li>
                <li>
                    <Link to="/">STARSHIPS</Link>
                </li>
             </ul>
            {/* <div className="btn-list">
                <button className="btn-home">PEOPLE</button>
                <button className="btn-home">PLANETS</button>
                <button className="btn-home">FILMS</button>
                <button className="btn-home">SPECIES</button>
                <button className="btn-home">VEHICLES</button>
                <button className="btn-home">STARSHIPS</button>
            </div> */}
        </div>
        
    )
}