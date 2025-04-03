import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from './config';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import RSVPForm from './components/RSVPForm';
import DeleteEvent from './components/DeleteEvent';
import FeedSection from './components/FeedSection';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/events`);
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Kerala College Tech Events</h1>
        <nav>
          <ul>
            <li><a href="#add-event">Add Event</a></li>
            <li><a href="#delete-event">Delete Event</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#feeds">Feeds</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {error && <div className="error-banner">{error}</div>}

        <EventForm onEventAdded={fetchEvents} />
        <DeleteEvent onEventDeleted={fetchEvents} />
        <RSVPForm />

        <section id="events">
          <h2>Upcoming Events</h2>
          {loading ? (
            <div>Loading events...</div>
          ) : (
            <EventList events={events} />
          )}
        </section>

        <FeedSection />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Kerala Tech Events</p>
      </footer>
    </div>
  );
}

export default App;
