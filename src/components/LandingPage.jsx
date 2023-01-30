// import ApiFetch from "./components/ApiFetch";
import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import SubCategory from "./SubCategory";
import { Link, Outlet } from "react-router-dom";
// import Home from '../components/pages/Home';


export default function LandingPage() {
    
    const [ ApiBank, setApiBank ] = useState([]);

    const fetchAPI = async (categories, totalPages) =>  {
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= totalPages; i++) {
            promises.push(fetch(`https://swapi.dev/api/${categories}/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            // .then(recievedData => setApiBank(recievedData))
            currentPage++;
        }
        let result = await Promise.all(promises); //jag Isac är som en "gud"
        let results = result.map(data => data.results)
        setApiBank([].concat(...results));

    }
    return (
        <>
        <div className="testmall">
             <div className="headerContainer">
                <img className="headerImg" src="./assets/img/starwars.jpg" alt="starWars"></img>
                <h1 className="headerText">Epic Star Wars Wikipedia</h1>
             </div>
             <div className="btn-list">
                <Link to="/People"><button onClick={() => fetchAPI("people", 9)} className="btn-home">People</button></Link>
                <Link to="/Planets"><button onClick={() => fetchAPI("planets", 6)} className="btn-home">PLANETS</button></Link>
                <Link to="/Films"><button onClick={() => fetchAPI("films", 1)} className="btn-home">FILMS</button></Link>
                <Link to="/Species"><button onClick={() => fetchAPI("species", 4)} className="btn-home">SPECIES</button></Link>
                <Link to="/Vehicles"><button onClick={() => fetchAPI("vehicles", 4)} className="btn-home">VEHICLES</button></Link>
                <Link to="/Starships"><button onClick={() => fetchAPI("starships", 4)} className="btn-home">STARSHIPS</button></Link>
            </div>
        </div>
        {ApiBank && <SubCategory data={ApiBank}/>}
        </>
    )
}
