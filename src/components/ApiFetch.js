import React, { useState, useEffect } from "react";
import '../styles/Home.css';
// export default FetchAPI = props => {
//     FetchAPI(props);
// }
export default function FetchAPI(url) {
    const [ data, setData ] = useState([]);
    url = "https://swapi.dev/api/people/"
    useEffect(() => {
        fetch(`${url}`)
        .then(Response => Response.json())
        .then(tempData => setData(tempData.results));
        // LoadData();   
    }, []);
    console.log(data.map(temp => (temp)))
    return (
        
        <div className="FetchContainer">
            {data.map(temp => (<button onClick={temp.url} className="bajs" key={temp.name}>{temp.name}</button>))}
        </div>
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