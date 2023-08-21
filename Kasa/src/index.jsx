import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogementContainer from './components/LogementContainer/index';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import Propos from './pages/Propos';
import GlobalStyle from './components/GlobalStyle/index'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<LogementContainer />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
