import React, { useState } from 'react';
import RSVPForm from './RSVPForm';
import DeleteEvent from './DeleteEvent';

function FeedSection({ events, deleteEvent }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRSVPClick = (event) => {
    setSelectedEvent(event);
  };

  const closeRSVP = () => {
    setSelectedEvent(null);
  };

  const submitRSVP = (rsvpData) => {
    console.log('RSVP submitted for event:', selectedEvent.title, rsvpData);
    alert(`RSVP submitted for "${selectedEvent.title}" by ${rsvpData.name}`);
    closeRSVP();
  };

  return (
    <div className="feed-section">
      <h2>Event Feed</h2>
      {events.length === 0 ? (
        <p>No events available. Please add some events!</p>
      ) : (
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id} className="event-card">
              <strong>{event.title}</strong> — {event.date} <br />
              {event.description}
              <br />
              <button onClick={() => handleRSVPClick(event)}>RSVP</button>
              <DeleteEvent event={event} deleteEvent={deleteEvent} />
            </li>
          ))}
        </ul>
      )}
      {selectedEvent && (
        <RSVPForm
          event={selectedEvent}
          onSubmit={submitRSVP}
          onCancel={closeRSVP}
        />
      )}
    </div>
  );
}

export default FeedSection;
