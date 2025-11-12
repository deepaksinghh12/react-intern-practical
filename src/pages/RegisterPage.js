import React, { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    try {
      register(form);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3>Register</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control"
                 value={form.name}
                 onChange={e => setForm({ ...form, name: e.target.value })}
                 required />
        </div>
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
                 minLength={6}
                 onChange={e => setForm({ ...form, password: e.target.value })}
                 required />
        </div>
        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}
