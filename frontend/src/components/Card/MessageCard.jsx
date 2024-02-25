import React from 'react';

function MessageCard({ from, contactEmail, message }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-center font-bold mb-4">{from}</h2>
      <div className="flex flex-col">
        <p>
          <strong>Contact Email: </strong>
          {contactEmail}
        </p>
        <p>
          <strong>Message: </strong>
          {message}
        </p>
      </div>
    </div>
  );
}

export default MessageCard;
