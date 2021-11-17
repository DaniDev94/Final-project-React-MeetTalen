import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import Gallery from "./pages/GalleryPage/GalleryPage";
import Home from "./pages/HomePage/Homepage";
import FormJobOffers from "./pages/JobOfferPage/FormJobOfferPages";
import JobOffers from "./pages/JobOfferPage/JobOfferPage";
import Login from "./pages/LoginPage/LoginPage";
import NewLogin from "./pages/LoginPage/NewLoginPage";
import Navbar from "./pages/Navbar/NavbarPage";

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
          <Route path="#"/>
          </Route>













          <Route path="login" />
          <Route element={<Login></Login>} />
          <Route path="register" />
          <Route element={<NewLogin></NewLogin>} />
          <Route path="/joboffer" />
          <Route element={<JobOffers></JobOffers>} />
          <Route path="joboffer/create" />
          <Route element={<FormJobOffers></FormJobOffers>} />
          <Route path="users/login" element={<Login />} />
        </Route>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
