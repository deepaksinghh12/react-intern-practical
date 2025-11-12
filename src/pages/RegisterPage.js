import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import AlertBox from '../components/AlertBox';
import { register } from '../services/authService';
import { isValidEmail, isStrongPassword } from '../utils/validators';
import '../styles/auth.css';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    if (!isValidEmail(form.email)) return setError('Please enter a valid email.');
    if (!isStrongPassword(form.password)) return setError('Password must be at least 6 characters.');

    try {
      register(form);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center">
      <div className="auth-card p-4 shadow">
        <h3 className="text-center mb-3">Create Account</h3>
        <AlertBox type="danger" message={error} />
        <form onSubmit={handleSubmit}>
          <InputField label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <InputField label="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          <InputField label="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
          <button className="btn btn-primary w-100 mt-3">Register</button>
        </form>
      </div>
    </div>
  );
}
