import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import AboutMe from './AboutMe';
import MyStuff from './MyStuff';
import reportWebVitals from './reportWebVitals';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/myStuff" element={<MyStuff />} />
      </Routes>
    </Router>
    <Analytics />
  </React.StrictMode>
);

reportWebVitals();
