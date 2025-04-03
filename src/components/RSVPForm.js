import React, { useState } from 'react'

function RSVPForm({ event, onSubmit, onCancel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) return

    onSubmit({ name, email })
    setName('')
    setEmail('')
  }

  return (
    <div className="rsvp-form-overlay">
      <div className="rsvp-form-container">
        <h3>RSVP for: {event.title}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="rsvp-buttons">
            <button type="submit">Submit RSVP</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RSVPForm
