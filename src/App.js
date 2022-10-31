import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Catalogue from './Catalogue';
import Services from './Services';
import Contact from './Contact';

function App() {
  return <Router>
  
  <nav>
    <Link to="/home" className='link'>Home</Link>
    <Link to="/catalogue" className='link'>Catalogue</Link>
    <Link to="/services" className='link'>Services</Link>
    <Link to="/contact" className='link'>Contact Us</Link>
  </nav>

  <Routes>
    <Route path='/home'       element={<Home/>} />
    <Route path='/catalogue'  element={<Catalogue/>} />
    <Route path='/services'   element={<Services/>} />
    <Route path='/contact'    element={<Contact/>} />
  </Routes>
  
</Router>

}

export default App;
