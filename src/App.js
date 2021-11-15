
import './App.css';
import Gallery from './pages/GalleryPage/GalleryPage';
import Home from './pages/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home></Home>
      
       <Gallery></Gallery>
      </header>
    </div>
  );
}

export default App;
