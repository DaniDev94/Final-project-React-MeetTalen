import React, { useState, useEffect } from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { Routes, Route } from "react-router-dom";
import HomeCarouselPage from "./pages/HomeCarouselPage/HomeCarouselPage";
import Loadingpage from "./pages/LoadingPage/Loadingpage";
import RegisterPage from "./pages/UserPages/pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import JobOffersPage from "./pages/JobOfferPage/JobOfferPage";
import FormJobOffers from "./pages/JobOfferPage/pages/FormJobOffer/FormJobOfferPages";
import DetailsJobOffer from "./pages/JobOfferPage/pages/DetailsJobOffer/DetailsJobOffer";
import DetailsCandidate from "./pages/CandidatePage/CandidateDetailPage/CandidateDetailPage";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomeCarouselPage></HomeCarouselPage>} />
          <Route path="login" element={<Loadingpage></Loadingpage>} />
          <Route path="register" element={<RegisterPage></RegisterPage>} />
          <Route path="profile" element={<ProfilePage></ProfilePage>} />
          <Route path ="candidates">
          <Route index element ={<CandidatePage></CandidatePage>} />
          <Route path=":name" element={<DetailsCandidate></DetailsCandidate>} />
          </Route>
          <Route path="joboffer">
            <Route index element={<JobOffersPage></JobOffersPage>} />
            <Route path="create" element={<FormJobOffers></FormJobOffers>} />
            <Route path=":id" element={<DetailsJobOffer></DetailsJobOffer>} />
          </Route>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
