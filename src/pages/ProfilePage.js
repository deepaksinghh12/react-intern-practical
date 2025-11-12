import React, { useState } from 'react';
import { getCurrentUser, updateProfile } from '../services/authService';
import AlertBox from '../components/AlertBox';
import InputField from '../components/InputField';
import '../styles/profile.css';

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
    <div className="profile-container d-flex justify-content-center mt-5">
      <div className="profile-card p-4 shadow">
        <h3 className="text-center mb-3">My Profile</h3>
        <AlertBox type="success" message={msg} />
        <form onSubmit={handleSave}>
          <InputField label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <InputField label="Email (read-only)" value={form.email} readOnly />
          <button className="btn btn-primary w-100 mt-3">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
