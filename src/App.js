import UsersPage from './pages/UsersPage/UsersPage';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'    
import 'primereact/resources/primereact.min.css'                    
import 'primeicons/primeicons.css'  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersPage></UsersPage>
      </header>
    </div>
  );
}

export default App;
