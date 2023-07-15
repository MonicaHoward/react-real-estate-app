import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllProperties from './pages/AllProperties';
import Home from './pages/Home'

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-properties' element={<AllProperties />} />
      </Routes>
    </Router>
  );
}

export default App;
