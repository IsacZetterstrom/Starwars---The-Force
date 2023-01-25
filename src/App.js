import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import FetchAPI from './components/ApiFetch';
import InfoPage from './components/InfoPage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<LandingPage />} />
          {/* <Route element={<InfoPage />} /> */}
          <Route path="InfoPage" element={<InfoPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
