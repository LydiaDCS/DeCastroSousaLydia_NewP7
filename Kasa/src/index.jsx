import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import Error from './pages/Error/error';
import Footer from './components/Footer/footer';
import About from './pages/About/about';
import CardDetails from './pages/CardDetails/cardDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);

