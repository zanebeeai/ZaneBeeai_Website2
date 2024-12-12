import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import AboutMe from './AboutMe';
import MyStuff from './MyStuff';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/MyStuff" element={<MyStuff />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
