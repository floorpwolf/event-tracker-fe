import React from 'react';

function DeleteEvent({ event, deleteEvent }) {
  return (
    <button onClick={() => deleteEvent(event.id)}>
      Delete
    </button>
  );
}

export default DeleteEvent;
