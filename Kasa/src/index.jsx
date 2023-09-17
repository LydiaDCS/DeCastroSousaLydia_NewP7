import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
/*import Logement from './pages/Logement/index';*/
import Header from './components/Header/header';
import Error from './pages/Error/error';
import Footer from './components/Footer/footer';
import About from './pages/About/about';
import CardDetails from './components/common/cardDetails/cardDetails'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<CardDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)