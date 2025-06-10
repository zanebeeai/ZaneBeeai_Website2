import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <span className="header-name" onClick={() => navigate('/')}>
          {isMobile ? 'zb.' : 'zane beeai.'}
        </span>
      </div>
      <div className="header-right">
        <button className="header-button" onClick={() => navigate('/aboutMe')}>aboutMe</button>
        <button className="header-button" onClick={() => navigate('/myStuff')}>myStuff</button>
        <a
  className="header-button"
  href="/zaneBeeai_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
  resume📄
</a>
</div>
      <div className="header-underline"></div>
    </div>
  );
};

export default Header;
