
import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/Home.css';
import SubCategory from '../SubCategory'

export default function People({data}) { 
    let peopleStructure =[];

    peopleStructure.push (<h2>HEEY</h2>)
    console.log(peopleStructure)
console.log({data})
    return (
        <div>
            {peopleStructure}
        {/* {peopleStructure && <SubCategory data={peopleStructure}/>} */}
        {/* <Link to="/People"><button onClick={() => fetchAPI("people", 9)} className="btn-home">PEOPLE</button></Link> */}
        </div>
    )
}