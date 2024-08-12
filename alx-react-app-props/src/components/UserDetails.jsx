// src/UserDetails.jsx

import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserDetails() {
  // Consume UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
