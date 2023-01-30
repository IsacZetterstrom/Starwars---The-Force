import React from "react";
import './App.css';

//components----------------------------------
import LandingPage from './components/LandingPage';
import SubCategory from './components/SubCategory';
import FetchApi from "./components/FetchApi";

// pages--------------------------------------
import Films from './components/pages/Films';
import Home from './components/pages/Home';
import People from './components/pages/People';
import Vehicles from './components/pages/Vehicles';
import Species from './components/pages/Species';
import Planets from './components/pages/Planets';
import Starships from './components/pages/Starships';



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div clame="App">
    {/* <LandingPage /> */}
      <Routes>
          <Route path ="/" element={<LandingPage />}>
          <Route exact path="/People" element={<People />} />
          <Route exact path="/Vehicles" element={<Vehicles />} />
          <Route exact path="/Planets" element={<Planets />} />
          <Route exact path="/Films" element={<Films />} />
          <Route exact path="/Species" element={<Species />} />
          <Route exact path="/Starships" element={<Starships />} />
          </Route>
          
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
