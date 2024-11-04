import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/red';
import Blue from './components/blue';
import Home from './components/home';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;