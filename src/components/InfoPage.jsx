// import ApiFetch from "./components/ApiFetch";
import '../styles/Home.css';
import React from "react";
import { fireEvent } from '@testing-library/react';
// import fetchAPI from "./LandingPage"



export default function InfoPage({data}){
    // console.log(data);
    let html = "";
    let tempHtml = [];
	if(data?.results?.[1]?.url?.includes("people")){
        console.log("PEPÖL")

        for (let i = 0; i < data.results.length; i++) {
            tempHtml.push(<button className='sub-category-btn'>{data.results[i].name}</button>)
            // console.log(tempHtml)
            html = tempHtml;

        
        }   
        
    }else if(data?.results?.[1]?.url?.includes("planets")){

        for (let i = 0; i < data.results.length; i++) {
            tempHtml.push(<button className='sub-category-btn'>{data.results[i].name}</button>)
            // console.log(tempHtml)
            html = tempHtml;
        }
        console.log("planet")
    }else if(data?.results?.[1]?.url?.includes("films")){

        for (let i = 0; i < data.results.length; i++) {
            tempHtml.push(<button className='sub-category-btn'>{data.results[i].title}</button>)
            // console.log(tempHtml)
            html = tempHtml;
        }
        console.log("films")
    }else if(data?.results?.[1]?.url?.includes("species")){

        for (let i = 0; i < data.results.length; i++) {
            tempHtml.push(<button className='sub-category-btn'>{data.results[i].name}</button>)
            // console.log(tempHtml)
            html = tempHtml;
        }
        console.log("species")
    }else if(data?.results?.[1]?.url?.includes("vehicles")){

        for (let i = 0; i < data.results.length; i++) {
            tempHtml.push(<button className='sub-category-btn'>{data.results[i].name}</button>)
            // console.log(tempHtml)
            html = tempHtml;
        }
        console.log("vehicles")
    }else if(data?.results?.[1]?.url?.includes("starships")){

        for (let i = 0; i < data.results.length; i++) {
            tempHtml.push(<button className='sub-category-btn'>{data.results[i].name}</button>)
            // console.log(tempHtml)
            html = tempHtml;
        }
        console.log("starships")
    }
    let ApiList = data;
    // console.log(ApiList)
    return(
        
        <div className='sub-categories-list'>
            {html}
            {/* {ApiList && ApiList?.results?.map(result => (
                <div className='whiteText'>
                    <h1>{result.name}</h1>
                    <p>Gender: {result.gender}</p>
                </div>

            ) )} */}
        </div>
    )
}