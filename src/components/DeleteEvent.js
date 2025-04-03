import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

export default function DeleteEvent({ onEventDeleted }) {
  const [deleteId, setDeleteId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/events/${deleteId}`, { method: 'DELETE' });
      if (res.ok) {
        onEventDeleted(deleteId);
        setDeleteId('');
      }
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  return (
    <section id="delete-event">
      <h2>Delete Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="deleteEventId">Event ID:</label>
          <input
            type="number"
            id="deleteEventId"
            className="form-control"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-danger">Delete Event</button>
      </form>
    </section>
  );
}
