import React, { useContext } from 'react';
import UserContext from './UserContext';  // Assuming UserContext is in the same directory

function UserProfile() {
  const { user } = useContext(UserContext); // Assuming user data is stored in userContext

  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '10px' }}>{user.name}</h2>
      <p style={{ fontSize: '1.2em', margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
      <p style={{ fontSize: '1.1em', margin: '5px 0', color: 'darkgray' }}>{user.bio}</p>
    </div>
  );
}

export default UserProfile;
