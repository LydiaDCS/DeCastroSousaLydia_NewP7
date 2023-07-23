import React from 'react';
import ReactDOM from 'react-dom';
import './Icons/fontawesome';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logements from './pages/Logements';
import Header from './components/Header';
import Error from './components/Error';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:logementNumber" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
