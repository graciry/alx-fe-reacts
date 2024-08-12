import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.2em', margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '1.1em', margin: '5px 0', color: 'darkgray' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
