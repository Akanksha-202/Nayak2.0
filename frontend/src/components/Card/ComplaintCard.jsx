import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShare, FaBookmark, FaTrash, FaRegBookmark } from 'react-icons/fa';
import ContactPopup from '../ContactPopup/ContactPopup';
import { addDoc, collection, deleteDoc, doc, where, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/utils';

function ComplaintCard({ complaints, userEmail }) {
  const [showContactPopup, setShowContactPopup] = useState(false); // State to manage modal visibility
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    // Check local storage for bookmarked status on component mount
    const storedBookmark = localStorage.getItem('bookmarked');
    if (storedBookmark !== null) {
      setBookmarked(JSON.parse(storedBookmark));
    }
  }, []);

  const handleBookmarkClick = async (complaint) => {
    const savesRef = collection(db, 'saves'); // Reference to the 'saves' collection

    if (!bookmarked) {
      //!false=>true->add to saves
      await addDoc(savesRef, {
        userId: userEmail,
        complaintId: complaint.id,
      });
      // Update local storage
      localStorage.setItem('bookmarked', true);
    } else {
      // false->remove from saves
      const q = query(savesRef, where('userId', '==', userEmail), where('complaintId', '==', complaint.id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref); // Delete each document returned by the query
      });
      // Update local storage
      localStorage.setItem('bookmarked', false);
    }

    // Toggle the bookmarked state
    setBookmarked(!bookmarked);
  };

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
                {complaint.userEmail !== userEmail && (
                  <div onClick={() => handleBookmarkClick(complaint)} className='cursor-pointer'>
                    {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
                  </div>
                )}
                <FaShare
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleShare(complaint.title)}
                />
                {complaint.userEmail === userEmail && (<FaTrash className="text-red-500 cursor-pointer" onClick={() => handleDelete(complaint.id)} />)}
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
              disabled={complaint.userEmail === userEmail}
              style={{ cursor: complaint.userEmail === userEmail ? 'not-allowed' : 'pointer' }}
            >
              Reach Out
            </button>
              {showContactPopup &&
                <ContactPopup
                  onClose={() => setShowContactPopup(false)}
                  loggedInEmail={userEmail}
                  complaintEmail={complaint.userEmail}
                  complaintTitle={complaint.title}
                />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComplaintCard;
