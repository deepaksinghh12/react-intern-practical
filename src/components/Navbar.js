import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';

export default function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">React Auth App</Link>
        <div>
          {user ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-sm me-2">Profile</Link>
              <button onClick={handleLogout} className="btn btn-danger btn-sm">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
              <Link to="/register" className="btn btn-success btn-sm">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
