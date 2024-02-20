// ProfileHeader.js
import React from 'react';

const ProfileHeader = ({ avatarUrl, username }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <img src={avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full mb-2" />
      <h2 className="text-xl font-semibold">{username}</h2>
    </div>
  );
};

export default ProfileHeader;
