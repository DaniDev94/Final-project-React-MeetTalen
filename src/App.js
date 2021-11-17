
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Candidate from './pages/CandidatePage/CandidatePage';
import Gallery from './pages/GalleryPage/GalleryPage';
import Home from './pages/HomePage/Homepage';
import FormJobOffers from './pages/JobOfferPage/FormJobOfferPages';
import JobOffers from './pages/JobOfferPage/JobOfferPage';
import Login from './pages/LoginPage/LoginPage';
import NewLogin from './pages/LoginPage/NewLoginPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <BrowserRouter>
       <Home></Home> */}
      <Candidate></Candidate>
       {/* <Gallery></Gallery>
       <JobOffers></JobOffers>
       <FormJobOffers></FormJobOffers>
       <Login></Login>
       <NewLogin></NewLogin>
       </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;
