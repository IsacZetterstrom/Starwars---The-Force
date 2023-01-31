
import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/Home.css';
import SubCategory from '../SubCategory'
import LandingPage from "../LandingPage";


// const fetchAPIPeople = "https://swapi.dev/api/people/[index]/" 
// console.log(fetchAPIPeople)

//const peopleLockUp = (peopleID) => {
  // return `https://swapi.dev/api/people/{index}`;
//}



// let peopleId = 1-82 
// peopleId1 = Luke 
//peopleId2 = "C-3PO
//https://swapi.dev/api/people/{peopleId}/"

 // get api =  /api/people/1/  <----- Luke ger detta nedan

//  "name": "Luke Skywalker", 
//     "height": "172", 
//     "mass": "77", 
//     "hair_color": "blond", 
//     "skin_color": "fair", 
//     "eye_color": "blue", 
//     "birth_year": "19BBY", 
//     "gender": "male", 

export default function People(categoryData) {
    
    // console.log(categoryData.data)


    return (
        <div>
            <h2 className="whiteText">People</h2>
            {/* <h3 className="whiteText">{categoryData.name}</h3> */}
        </div>
    )
}
