import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShare, FaEye, FaBookmark } from 'react-icons/fa';
import ContactPopup from '../ContactPopup/ContactPopup';

function ComplaintCard({ complaints }) {
  const [showContactPopup, setShowContactPopup] = useState(false); // State to manage modal visibility

  const handleShare = async (complaintName) => {
    // Your existing handleShare function remains unchanged
  };

  return (
    <div className="flex flex-wrap">
      {complaints.map((complaint) => (
        <div key={complaint.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-md shadow-md p-4 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-center mb-2">{complaint.title}</h2>
              <div className="flex items-center justify-end space-x-2">
                <FaBookmark />
                <FaShare
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleShare(complaint.title)}
                />
                <FaEye className="text-green-500" />
                <span>{complaint.views}</span>
              </div>
              <p className="text-gray-600 mt-4">
                {complaint.description.length > 100 ? (
                  <>
                    {complaint.description.slice(0, 100)}
                    <Link
                      className="text-blue-500 hover:underline focus:outline-none ml-2"
                      to={`/community-wall/${complaint.title}`}
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  complaint.description
                )}
              </p>
            </div>
            {/* Button to open the ContactPopup modal */}
            
            <button
              onClick={() => setShowContactPopup(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Open Contact Popup
            </button>
          </div>
        </div>
      ))}
      {/* Render the ContactPopup modal component if showContactPopup state is true */}
      {showContactPopup && <ContactPopup onClose={() => setShowContactPopup(false)} />}
    </div>
  );
}

export default ComplaintCard;
