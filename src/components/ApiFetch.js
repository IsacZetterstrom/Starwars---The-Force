import React, { useState, useEffect } from "react";
import '../styles/Home.css';
// export default FetchAPI = props => {
//     FetchAPI(props);
// }
export default function FetchAPI(data) {
    const [ people, setPeople ] = useState([]);
    const [ planets, setPlanets] = useState([]);
    const [ films, setfilms ] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([])
    // fetch = "https://swapi.dev/api/people/"
    console.log(data)
    useEffect(() => {
        fetch(data.data)
        .then(Response => Response.json())
        .then(tempData => setPeople(tempData.results));
        // LoadData();   
    }, []);
    console.log(people.map(temp => (temp)))
    return (
        <div>
            {data.url};
        </div>
        
        // <div className="FetchContainer">
        //     {people.map(temp => (<button onClick={temp.url} className="bajs" key={temp.name}>{temp.name}</button>))}
        // </div>
    )
    // const LoadData = async () => {
    //     await fetch(`${url}`)
    //     .then(Response => Response.json())
    //     .then(tempData => setData(tempData));
    // }
}


// "name": den man klickat på, 
//             "height": "den man klickat på", 
//             "mass": "den man klickat på ", 
//             "hair_color": "blond", 
//             "skin_color": "fair", 
//             "eye_color": "blue", 
//             "birth_year": "19BBY", 
//             "gender": "male", 
//             "homeworld": "https://swapi.dev/api/planets/1/", 
//             "films": [
//                 "https://swapi.dev/api/films/1/", 
//                 "https://swapi.dev/api/films/2/", 
//                 "https://swapi.dev/api/films/3/", 
//                 "https://swapi.dev/api/films/6/"
//             ], 
//             "species": [], 
//             "vehicles": [
//                 "https://swapi.dev/api/vehicles/14/", 
//                 "https://swapi.dev/api/vehicles/30/"
//             ], 
//             "starships": [
//                 "https://swapi.dev/api/starships/12/", 
//                 "https://swapi.dev/api/starships/22/"