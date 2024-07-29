import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-left">
        <span className="header-name" onClick={() => navigate('/')}>zane beeai.</span>
      </div>
      <div className="header-right">
        <button className="header-button" onClick={() => navigate('/aboutMe')}>aboutMe</button>
        <button className="header-button" onClick={() => navigate('/myStuff')}>myStuff</button>
      </div>
      <div className="header-underline"></div>
    </div>
  );
};

export default Header;
