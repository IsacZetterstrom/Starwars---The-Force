// import ApiFetch from "./components/ApiFetch";
import '../styles/Home.css';
import React from "react";
import { fireEvent } from '@testing-library/react';
// import fetchAPI from "./LandingPage"
let keyCounter = 0;
export default function InfoPage({data}){
    let tempHtml = [];
    console.log(data)

    if(data[0]?.url?.includes("people")){
        for (let i = 0; i < data.length; i++) {
            
            keyCounter ++;
            tempHtml.push(<button key={keyCounter} className='sub-category-btn'>{data[i].name}</button>)
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
    
    return(
        
        <div className='sub-categories-list'>
            {tempHtml}
            {/* {ApiList && ApiList?.results?.map(result => (
                <div className='whiteText'>
                    <h1>{result.name}</h1>
                    <p>Gender: {result.gender}</p>
                </div>

            ) )} */}
        </div>
    )
}