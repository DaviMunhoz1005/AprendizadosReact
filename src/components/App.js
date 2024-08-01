import './../assets/css/components/app.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Calculators from './Calculators';
import Homepage from './Homepage';
import localThumbnail from '../assets/images/localizacao.png';

const Header = () => {
  const location = useLocation();
  
  return (
    <header>
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active separationLink linkHome" : "separationLink linkHome"}>
            <Link to="/">Homepage</Link>
          </li>
          <li className={location.pathname === "/calculators" ? "active separationLink" : "separationLink"}>
            <Link to="/calculators">Calculadoras</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active separationLink" : "separationLink"}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={location.pathname === "/register" ? "active separationLink linkRegister" : "separationLink linkRegister"}>
            <Link to="/register">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/calculators" element={<Calculators />} />
          </Routes>
        </main>
        <footer>
          <div className='location'>
            <p>Localização: </p>
            <a href="https://www.google.com/maps?q=-23.555613787723697, -46.44113263579451" target="_blank" rel='noreferrer'>
              <img src={localThumbnail} alt="Imagem do Google Maps"/>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;