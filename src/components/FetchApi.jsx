// import React from "react";
// import { useState, useEffect } from "react";
// import SubCategory from "./SubCategory";
// useEffect 
// function FetchApi (data) {

//     // console.log(data.name)
//     Api(data.name, data.pages)
//     // const api = async (data.name, data.pages) =>  {
//     //     let promises = []
//     //     let currentPage = 1;
//     //     for (let i = 1; i <= totalPages; i++) {
//     //         promises.push(fetch(`https://swapi.dev/api/${categories}/?page=${currentPage}`)
//     //         .then(response => response.json())) //kolla mer på promise / promise all
//     //         // .then(recievedData => setApiBank(recievedData))
//     //         currentPage++;
//     //     }
//     //     let result = await Promise.all(promises); //jag Isac är som en "gud"
//     //     let results = result.map(data => data.results)
//     //     setApiBank([].concat(...results));

    
        
//     //     api(data)
// }
// export default  async function Api (category,totalPages) {
//         const [ ApiBank, setApiBank ] = useState([]); 
//         let promises = []
//         let currentPage = 1;
//         for (let i = 1; i <= totalPages; i++) {
//             promises.push(fetch(`https://swapi.dev/api/${category}/?page=${currentPage}`)
//             .then(response => response.json())) //kolla mer på promise / promise all
//             // .then(recievedData => setApiBank(recievedData))
//             currentPage++;
//         }
//         let result = await Promise.all(promises); //jag Isac är som en "gud"
//         let results = result.map(data => data.results)
//         setApiBank([].concat(...results));
//         console.log(ApiBank)
//         return (
//             <>
//             {ApiBank && <SubCategory data={ApiBank}/>}
            
//             </>
//         )
//     }