import React from 'react';
import { format } from 'date-fns';

export default function EventList({ events }) {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h3>{event.name}</h3>
          <p className="event-meta">
            {format(new Date(event.date), 'MMM dd, yyyy - hh:mm a')} | {event.location}
          </p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
