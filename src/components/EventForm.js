import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

export default function EventForm({ onEventAdded }) {
  const [eventData, setEventData] = useState({ name: '', description: '', date: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });
      if (res.ok) {
        const newEvent = await res.json();
        onEventAdded(newEvent);
        setEventData({ name: '', description: '', date: '', location: '' });
      }
    } catch (err) {
      console.error('Error adding event:', err);
    }
  };

  return (
    <section id="add-event">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            className="form-control"
            value={eventData.name}
            onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">Description:</label>
          <textarea
            id="eventDescription"
            className="form-control"
            value={eventData.description}
            onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Date & Time:</label>
          <input
            type="datetime-local"
            id="eventDate"
            className="form-control"
            value={eventData.date}
            onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventLocation">Location:</label>
          <input
            type="text"
            id="eventLocation"
            className="form-control"
            value={eventData.location}
            onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Add Event</button>
      </form>
    </section>
  );
}
