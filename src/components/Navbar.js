import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">Employee App</Link>
      <div className="navbar-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/employee-form" className="nav-link">Employee Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;
