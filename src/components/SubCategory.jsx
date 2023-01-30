// import ApiFetch from "./components/ApiFetch";
import { Link, Outlet } from "react-router-dom";
import '../styles/Home.css';
import React from "react";
import People from "../components/pages/People";
import Planets from './pages/Planets';
import Films from "./pages/Films";
import Species from "./pages/Species";
import Vehicles from "./pages/Vehicles";
import Starships from "./pages/Starships";

let keyCounter = 0;

export default function SubCategory({data}){
    console.log({data})
    let tempHtml = [];
    console.log(tempHtml)

    if(data[0]?.url?.includes("people")){
        tempHtml.push(<People/>) // hitta ett sätt att tömma kategorierna 
        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
            // tempHtml.push(<button onClick={<People data={tempHtml}/>} key={keyCounter} className='sub-category-btn'><Link to="/People">{data[i].name}</Link></button>)
        } 
    }else if(data[0]?.url?.includes("planets")){
        tempHtml.push(<Planets/>)
        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }

    }else if(data[0]?.url?.includes("films")){
        tempHtml.push(<Films/>)
        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].title}</button>)
        }

    }else if(data[0]?.url?.includes("species")){
        tempHtml.push(<Species/>)
        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }

    }else if(data[0]?.url?.includes("vehicles")){
        tempHtml.push(<Vehicles/>)
        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }

    }else if(data[0]?.url?.includes("starships")){
        tempHtml.push(<Starships/>)
        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }
        
    }
    console.log(tempHtml)
    return(
        <div className='sub-categories-list'>
            {/* <People/> */}
            {tempHtml}
            {/* <Outlet /> */}
            
            {/* {ApiList && ApiList?.results?.map(result => (
                <div className='whiteText'>
                    <h1>{result.name}</h1>
                    <p>Gender: {result.gender}</p>
                </div>

            ) )} */}
        </div>
    )
}