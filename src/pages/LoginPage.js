import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    try {
      login(form);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3>Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email"
                 className="form-control"
                 value={form.email}
                 onChange={e => setForm({ ...form, email: e.target.value })}
                 required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password"
                 className="form-control"
                 value={form.password}
                 onChange={e => setForm({ ...form, password: e.target.value })}
                 required />
        </div>
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}
