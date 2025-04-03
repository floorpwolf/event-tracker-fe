import React from 'react';
import { API_BASE_URL } from '../config';

const FeedSection = () => {
  return (
    <section id="feeds">
      <h2>Subscribe to Feeds</h2>
      <p>Stay updated with our event feeds:</p>
      <ul>
        <li>
          <a 
            href={`${API_BASE_URL}/api/atom`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="feed-link"
          >
            Atom Feed
          </a>
        </li>
        <li>
          <a 
            href={`${API_BASE_URL}/api/ics`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="feed-link"
          >
            ICS Calendar Feed
          </a>
        </li>
      </ul>
    </section>
  );
};

export default FeedSection;
