import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import '../styles/App.css';

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">ReactAuth</Link>
        <div className="d-flex">
          {user ? (
            <>
              <NavLink to="/profile" className="btn btn-outline-light btn-sm me-2">Profile</NavLink>
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline-light btn-sm me-2">Login</NavLink>
              <NavLink to="/register" className="btn btn-success btn-sm">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
