import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="https://img.freepik.com/premium-vector/find-jobs-letter-with-helmet-construction-logo-vector-design-illustration_612390-635.jpg?ga=GA1.1.807105909.1740740693&semt=ais_hybrid" 
          alt="Logo"
        />
      </div>
      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Dashboard">Applications</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Add_jobs">Create</Link></li>
        <li><Link to="/Insights">Insights</Link></li>
      </ul>
      <button className="logout-btn">
        <Link to="/Loginpage">Logout</Link>
      </button>
    </nav>
  );
};

export default Navbar;