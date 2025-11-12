import React from 'react';

export default function AlertBox({ type = 'info', message }) {
  if (!message) return null;
  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {message}
    </div>
  );
}
