import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import AlertBox from '../components/AlertBox';
import { login } from '../services/authService';
import '../styles/auth.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    try {
      login(form);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center">
      <div className="auth-card p-4 shadow">
        <h3 className="text-center mb-3">Login</h3>
        <AlertBox type="danger" message={error} />
        <form onSubmit={handleSubmit}>
          <InputField label="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          <InputField label="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
          <button className="btn btn-success w-100 mt-3">Login</button>
        </form>
      </div>
    </div>
  );
}
