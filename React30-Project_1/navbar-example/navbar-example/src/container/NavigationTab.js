// src/container/NavigationTab.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationTab.css';

const Navigation = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-primary" to="/home">@NyapCode</NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item"><NavLink className="nav-link text-dark" to="/home">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-dark" to="/contact">Contact</NavLink></li>
            <li className="nav-item ms-3">
              <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm">
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
