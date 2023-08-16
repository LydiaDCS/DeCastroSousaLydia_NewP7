import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import Propos from './pages/Propos';


ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      </style>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
