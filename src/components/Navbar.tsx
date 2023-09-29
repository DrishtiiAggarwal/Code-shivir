// Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Your logo image or text goes here */}
        <span>CODESHIVIR</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#About-Me">About Me</a>
        </li>
        <li className="navbar-item">
          <a href="#curriculum">Curriculum</a>
        </li>
        <li className="navbar-item">
          <a href="https://www.linkedin.com/in/abhi18632/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
      </ul>
      {/*<div className="navbar-enroll">
        <button>Enroll Now</button>
      </div>*/}
    </nav>
  );
};

export default Navbar;
