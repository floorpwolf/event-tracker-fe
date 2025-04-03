import React from 'react'

function EventList({ events }) {
  if (events.length === 0) {
    return <p>No events found. Add some events!</p>
  }

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <strong>{event.title}</strong> — {event.date} <br />
          {event.description}
        </li>
      ))}
    </ul>
  )
}

export default EventList
