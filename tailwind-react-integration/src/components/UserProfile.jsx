// src/components/UserProfile.jsx
import React from 'react';

function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 sm:p-4 md:p-8 p-4  md:max-w-sm md:text-xl sm:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          alt="User"
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 hover:text-blue-500 my-4">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  

