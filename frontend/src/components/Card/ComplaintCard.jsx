import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/utils';
import { FaHeart, FaShare, FaEye, FaFilePdf, FaArrowLeft } from 'react-icons/fa'; // Import icons
import { MdContactPhone } from 'react-icons/md'; // Import contact icon
import Modal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf'; // Import react-pdf components

function ComplaintCard() {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cases'));
        const fetchedComplaints = [];
        querySnapshot.forEach((doc) => {
          fetchedComplaints.push({ id: doc.id, ...doc.data() });
        });
        setComplaints(fetchedComplaints);
      } catch (error) {
        console.error('Error fetching complaints: ', error);
      }
    };
    fetchData();
  }, []);

  const openModal = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const closeModal = () => {
    setSelectedComplaint(null);
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
            // Fallback for unsupported browsers
            // You can implement custom share functionality or display a message
        }
    } catch (error) {
        console.error('Error sharing:', error);
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
                <FaHeart className="text-red-500 cursor-pointer" />
                <FaShare className="text-blue-500 cursor-pointer" onClick={() => handleShare(complaint.title)} />
                <FaEye className="text-green-500" />
                <span>{complaint.views}</span>
              </div>
              <p className="text-gray-600 mt-4">
                {complaint.description.length > 100 && !selectedComplaint ? (
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
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default ComplaintCard;
