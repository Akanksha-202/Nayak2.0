import React, { useState, useEffect } from 'react';
import ComplaintCard from '../../components/Card/ComplaintCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/utils';

const MyComplaints = ({ loggedInUserEmail }) => {
  const [userComplaints, setUserComplaints] = useState([]);
  
  useEffect(() => {
    const fetchUserComplaints = async () => {
      try {
        const q = query(collection(db, 'cases'), where('userEmail', '==', loggedInUserEmail));
        const querySnapshot = await getDocs(q);
        const fetchedUserComplaints = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserComplaints(fetchedUserComplaints);
      } catch (error) {
        console.error('Error fetching user complaints: ', error);
      }
    };

    fetchUserComplaints();
  }, [loggedInUserEmail]);

  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">My Complaints</h3>
      {userComplaints.length > 0 ? (
        <ComplaintCard complaints={userComplaints} />
      ) : (
        <p>No complaints found.</p>
      )}
    </div>
  );
};

export default MyComplaints;
