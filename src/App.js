
import './App.css';
import Gallery from './pages/GalleryPage/GalleryPage';
import Home from './pages/HomePage/Homepage';
import JobOffer from './pages/JobOfferPage/JobOfferPage';
import Login from './pages/LoginPage/LoginPage';
import NewLogin from './pages/LoginPage/NewLoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home></Home>
      
       <Gallery></Gallery>
       <JobOffer></JobOffer>
       <Login></Login>
       <NewLogin></NewLogin>
      </header>
    </div>
  );
}

export default App;
