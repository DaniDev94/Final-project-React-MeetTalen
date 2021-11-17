
import './App.css';
import Nav from './components/Nav/Nav';
import Candidate from './pages/CandidatePage/CandidatePage';
import Gallery from './pages/GalleryPage/GalleryPage';
import Home from './pages/HomePage/Homepage';
import JobOffer from './pages/JobOfferPage/JobOfferPage';
import Login from './pages/LoginPage/LoginPage';
import NewLogin from './pages/LoginPage/NewLoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Home></Home> */}
      {/* <Candidate></Candidate> */}
       {/* <Gallery></Gallery>
       <JobOffer></JobOffer> */}
       {/* <Login></Login>
       <NewLogin></NewLogin> */}
       <Nav></Nav>
      </header>
    </div>
  );
}

export default App;
