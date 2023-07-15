import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AllProperties from './pages/AllProperties';
import Home from './pages/Home'
import Property from './pages/Property';
import Main from './pages/Main';

import './App.css';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{'  '}
        <Link to="/main">Properties</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} >
          <Route index element={<AllProperties />} />
          <Route path=':id' element={<Property />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
