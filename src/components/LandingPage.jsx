// import ApiFetch from "./components/ApiFetch";
import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import InfoPage from "./InfoPage";

export default function LandingPage() {
    const [ ApiBank, setApiBank ] = useState([]);
    useEffect(() => {
        // fetchAPI();
    }, []);

    const fetchAPI = async (data) =>  {
         
        if(ApiBank.next != null){
            console.log(ApiBank.next)
            // console.log(ApiBank.results[0].url)   
        }
        await fetch(data)
        .then(response => response.json())
        .then(recievedData => setApiBank(recievedData),);
        

        // console.log(ApiBank)
        // if (pageNr < 10) {
        //     console.log(page);
        //     setPage(page + 1);
        // }

    }

    return (
        <>
        <div className="testmall">
             <div className="headerContainer">
                <img className="headerImg" src="./assets/img/starwars.jpg" alt="starWars"></img>
                <h1 className="headerText">Epic Star Wars Wikipedia</h1>
             </div>

             
             
             <div className="btn-list">
                <button onClick={() => fetchAPI(`https://swapi.dev/api/people/?page=1`)} className="btn-home">PEOPLE</button>
                <button onClick={() => fetchAPI("https://swapi.dev/api/planets/?page=1")} className="btn-home">PLANETS</button>
                <button onClick={() => fetchAPI("https://swapi.dev/api/films/?page=1")} className="btn-home">FILMS</button>
                <button onClick={() => fetchAPI("https://swapi.dev/api/species/?page=1")} className="btn-home">SPECIES</button>
                <button onClick={() => fetchAPI("https://swapi.dev/api/vehicles/?page=1")} className="btn-home">VEHICLES</button>
                <button onClick={() => fetchAPI("https://swapi.dev/api/starships/?page=1")} className="btn-home">STARSHIPS</button>
            </div>
        </div>

        {ApiBank && <InfoPage data={ApiBank}/>}
        </>
    )
}
