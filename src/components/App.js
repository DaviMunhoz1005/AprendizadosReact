import './../css/components/app.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculators from './Calculators';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div className='container'>
        <header>
          <nav>
            <ul>
              <li className="separationLink linkHome"><Link to="/">Homepage</Link></li>
              <li className="separationLink"><Link to="/calculators">Calculadoras</Link></li>
              <li className="separationLink"><Link to="/settings">Configurações</Link></li>
              <li className="separationLink linkRegister"><Link to="/register">Cadastre-se</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/calculators" element={<Calculators />} />
          </Routes>
        </main>
        <footer>
          <p>Contato: </p>
            <span className='emailSpan'>email@gmail.com</span>
            <span className='cellSpan'>55+ (11) 93425-0859</span>  
        </footer>
      </div>
    </Router>
  );
}

export default App;