import React from 'react';
import { useNavigate } from 'react-router-dom';

function MessageCard({ from, contactEmail, message, title }) {

    const navigate = useNavigate()
    const handleClick = () => {
        const newTitle = encodeURIComponent(title)
        navigate(`/community-wall/${newTitle}`);
    }
  return (
    <div className="bg-white shadow-md rounded-md p-6 mt-4">
      <h2 className="text-center font-bold mb-4 cursor-pointer" onClick={()=>handleClick()}>{title}</h2>
      <div className="flex flex-col">
        <p>
          <strong>Sender: </strong>
          {from}
        </p>
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
