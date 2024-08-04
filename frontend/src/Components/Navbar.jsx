import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Resume</Link>
      <Link to="/work-information">Work Information</Link>
      <Link to="/private-info">Private Information</Link>
      <Link to="/hr-settings">HR Settings</Link>
    </nav>
  );
};

export default Navbar;
