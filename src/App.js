import React, { useState, useEffect } from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Loadingpage from "./pages/LoadingPage/Loadingpage";
import LoginPage from "./pages/UserPages/pages/LoginPage/LoginPage";
import RegisterPage from "./pages/UserPages/pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import JobOffersPage from "./pages/JobOfferPage/JobOfferPage";
import FormJobOffers from "./pages/JobOfferPage/pages/FormJobOffer/FormJobOfferPages";
import DetailsJobOffer from "./pages/JobOfferPage/pages/DetailsJobOffer/DetailsJobOffer";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  })

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage></HomePage>} />
          <Route path="login" element={isLoading == true ? <Loadingpage></Loadingpage> : <LoginPage></LoginPage>} />
          <Route path="register" element={<RegisterPage></RegisterPage>} />
          <Route path="profile" element={<ProfilePage></ProfilePage>} />
          <Route path="candidates" element={<CandidatePage></CandidatePage>} />
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
