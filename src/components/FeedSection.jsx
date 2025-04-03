import React, { useState } from 'react'
import RSVPForm from './RSVPForm'

function FeedSection({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleRSVPClick = (event) => {
    setSelectedEvent(event)
  }

  const closeRSVP = () => {
    setSelectedEvent(null)
  }

  const submitRSVP = (rsvpData) => {
    // For now, just log the RSVP data.
    console.log('RSVP submitted for event:', selectedEvent.title, rsvpData)
    alert(`RSVP submitted for "${selectedEvent.title}" by ${rsvpData.name}`)
    closeRSVP()
  }

  return (
    <div className="feed-section">
      <h2>Event Feed</h2>
      {events.length === 0 ? (
        <p>No events available. Please add some events!</p>
      ) : (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-card">
              <strong>{event.title}</strong> — {event.date} <br />
              {
