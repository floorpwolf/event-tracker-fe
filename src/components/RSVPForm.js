import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

export default function RSVPForm() {
  const [rsvpData, setRsvpData] = useState({ event_id: '', user_name: '', user_email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/rsvps`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rsvpData)
      });
      if (res.ok) {
        alert('RSVP submitted successfully!');
        setRsvpData({ event_id: '', user_name: '', user_email: '' });
      }
    } catch (err) {
      console.error('Error submitting RSVP:', err);
    }
  };

  return (
    <section id="rsvp">
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
          <label htmlFor="rsvpEventId">Event ID:</label>
          <input
            type="number"
            id="rsvpEventId"
            className="form-control"
            value={rsvpData.event_id}
            onChange={(e) => setRsvpData({ ...rsvpData, event_id: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rsvpName">Your Name:</label>
          <input
            type="text"
            id="rsvpName"
            className="form-control"
            value={rsvpData.user_name}
            onChange={(e) => setRsvpData({ ...rsvpData, user_name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rsvpEmail">Your Email:</label>
          <input
            type="email"
            id="rsvpEmail"
            className="form-control"
            value={rsvpData.user_email}
            onChange={(e) => setRsvpData({ ...rsvpData, user_email: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Submit RSVP</button>
      </form>
    </section>
  );
}
