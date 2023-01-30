
import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/Home.css';
import SubCategory from '../SubCategory'

export default function People({data}) { 
    // peopleStructure =[];
console.log({data})
    return (
        <div>
            
        <h2 className="whiteText">People</h2>
        {/* <Link to="/People"><button onClick={() => fetchAPI("people", 9)} className="btn-home">PEOPLE</button></Link> */}
        </div>
    )
}