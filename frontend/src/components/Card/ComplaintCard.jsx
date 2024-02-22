import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShare,  FaBookmark,  FaTrash } from 'react-icons/fa';
import ContactPopup from '../ContactPopup/ContactPopup';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/utils';

function ComplaintCard({ complaints, userEmail }) {
  const [showContactPopup, setShowContactPopup] = useState(false); // State to manage modal visibility

  const handleShare = async (complaintName) => {
    try {
      if (navigator.share) {
        const complaintToShare = complaints.find(complaint => complaint.title === complaintName);
        if (!complaintToShare) {
          console.error('No complaint found for sharing');
          return;
        }
        const complaintTitleWithSpaces = encodeURIComponent(complaintToShare.title);
        const sharedUrl = `${window.location.href}/${complaintTitleWithSpaces}`;
        await navigator.share({
          title: complaintToShare.title,
          text: complaintToShare.description,
          url: sharedUrl
        });
      } else {
        console.log('Web Share API not supported');
        
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleDelete = async (complaintId) => {
    try {
      await deleteDoc(doc(db, 'cases', complaintId));
      window.location.reload();
      console.log('Complaint deleted successfully');
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  

  return (
    <div className="flex flex-wrap">
      {complaints.map((complaint) => (
        <div key={complaint.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-md shadow-md p-4 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-center mb-2">{complaint.title}</h2>
              <div className="flex items-center justify-end space-x-2">
               
                {complaint.userEmail !== userEmail && (<FaBookmark className='cursor-pointer'/>)}
                <FaShare
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleShare(complaint.title)}
                />
                {complaint.userEmail === userEmail && (<FaTrash className="text-red-500 cursor-pointer" onClick={()=>handleDelete(complaint.id)}/>)}
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
              Reach Out
            </button>
          </div>
        </div>
      ))}
      {showContactPopup && <ContactPopup onClose={() => setShowContactPopup(false)} />}
    </div>
  );
}

export default ComplaintCard;
