import React from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { Routes, Route } from "react-router-dom";
import { addToken } from "./utils/jwt";
import Home from "./pages/HomePage/Homepage";
import LoginPage from "./pages/UserPages/pages/LoginPage/LoginPage";
import RegisterPage from "./pages/UserPages/pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import JobOffersPage from "./pages/JobOfferPage/JobOfferPage";
import FormJobOffers from "./pages/JobOfferPage/pages/FormJobOffer/FormJobOfferPages";
import DetailsJobOffer from "./pages/JobOfferPage/pages/DetailsJobOffer/DetailsJobOffer";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>}/>
          <Route path="login" element={<LoginPage></LoginPage>}/>
          <Route path="register" element={<RegisterPage></RegisterPage>}/>
          <Route path="profile" element={addToken() ? <ProfilePage></ProfilePage> : <LoginPage></LoginPage>}/>
          <Route path="candidates" element={addToken() ? <CandidatePage></CandidatePage> : <LoginPage></LoginPage>} />
          <Route path="joboffer">
            <Route index element={addToken() ? <JobOffersPage></JobOffersPage> : <LoginPage></LoginPage>}/>
            <Route path="create" element={addToken() ? <FormJobOffers></FormJobOffers> : <LoginPage></LoginPage>} />
            <Route path=":id" element={addToken() ? <DetailsJobOffer></DetailsJobOffer> : <LoginPage></LoginPage> } />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
