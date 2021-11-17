import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import Home from "./pages/HomePage/Homepage";
import FormJobOffers from "./pages/JobOfferPage/FormJobOfferPages";
import JobOffers from "./pages/JobOfferPage/JobOfferPage";
import Login from "./pages/LoginPage/LoginPage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>} />
          <Route path="candidates" element ={<CandidatePage></CandidatePage>}/>
          <Route path="joboffer" >
          <Route index element={<JobOffers></JobOffers>}/>
          <Route path="create" element={<FormJobOffers></FormJobOffers>}/>
          </Route>
          <Route path="#"/>
          </Route>
          </Routes>

    
      
    </div>
  );
}

export default App;
