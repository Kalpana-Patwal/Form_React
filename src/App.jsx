import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import WorkInformation from './Components/WorkInformation';
import Navbar from './Components/Navbar'
import HrSettings from './Components/HrSettings';
import PrivateInformation from './Components/PrivateInformation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Resume</Link>
          <Link to="/work-information">Work Information</Link>
          <Link to="/private-information">Private Information</Link>
          <Link to="/hr-settings">HR Settings</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-information" element={<WorkInformation />} />
            <Route path="/private-information" element={<PrivateInformation />} />
            <Route path="/hr-settings" element={<HrSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
