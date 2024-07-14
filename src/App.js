import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Details from './pages/details';


function App() {
  return (
    <div>
      <div className='main-container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
