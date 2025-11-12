import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
      <h2>404 - Page Not Found</h2>
      <Link to="/" className="btn btn-outline-primary mt-3">Go Home</Link>
    </div>
  );
}
