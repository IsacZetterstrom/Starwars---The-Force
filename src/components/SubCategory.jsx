// import ApiFetch from "./components/ApiFetch";
import { Link, Outlet } from "react-router-dom";
import '../styles/Home.css';
import React from "react";
import People from "../components/pages/People";
import Planets from './pages/Planets';
let keyCounter = 0;

export default function SubCategory({data}){
    console.log({data})
    let tempHtml = [];
    console.log(tempHtml)

    if(data[0]?.url?.includes("people")){
        for (let i = 0; i < data.length; i++) {
            
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
            // tempHtml.push(<button onClick={<People data={tempHtml}/>} key={keyCounter} className='sub-category-btn'><Link to="/People">{data[i].name}</Link></button>)
        } 
    }else if(data[0]?.url?.includes("planets")){

        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }

    }else if(data[0]?.url?.includes("films")){

        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].title}</button>)
        }

    }else if(data[0]?.url?.includes("species")){

        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }

    }else if(data[0]?.url?.includes("vehicles")){

        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }

    }else if(data[0]?.url?.includes("starships")){

        for (let i = 0; i < data.length; i++) {
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
        }
        
    }
    console.log(tempHtml)
    return(
        
        <div className='sub-categories-list'>
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