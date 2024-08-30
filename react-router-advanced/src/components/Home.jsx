import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Select an option below:</p>
      <ul>
        <li><Link to="/profile">Go to Profile</Link></li>
        <li><Link to="/blog/1">View Blog Post 1</Link></li>
        <li><Link to="/blog/2">View Blog Post 2</Link></li>
      </ul>
    </div>
  );
}

export default Home;
