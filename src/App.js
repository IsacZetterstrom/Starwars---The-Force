import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
// import FetchAPI from './components/ApiFetch';
import InfoPage from './components/InfoPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route exact path="/" index element={<LandingPage />} />
          <Route exact path="/InfoPage" element={<InfoPage />} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
