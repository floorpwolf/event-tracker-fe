import React, { useState } from 'react'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {
  const [events, setEvents] = useState([])

  const addEvent = (newEvent) => {
    setEvents(prevEvents => [newEvent, ...prevEvents])
  }

  return (
    <div className="App">
      <h1>Event Tracker</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  )
}

export default App
