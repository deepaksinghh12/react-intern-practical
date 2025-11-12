import React, { useState } from 'react';
import { getCurrentUser, updateProfile } from '../services/authService';

export default function ProfilePage() {
  const user = getCurrentUser();
  const [form, setForm] = useState({ name: user.name, email: user.email });
  const [msg, setMsg] = useState('');

  const handleSave = e => {
    e.preventDefault();
    updateProfile(user.id, form);
    setMsg('Profile updated successfully!');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3>Your Profile</h3>
      {msg && <div className="alert alert-success">{msg}</div>}
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control"
                 value={form.name}
                 onChange={e => setForm({ ...form, name: e.target.value })}
                 required />
        </div>
        <div className="mb-3">
          <label>Email (read-only)</label>
          <input className="form-control" value={form.email} readOnly />
        </div>
        <button className="btn btn-primary w-100">Save Changes</button>
      </form>
    </div>
  );
}
