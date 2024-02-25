// SavedPosts.js
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/utils';
import ComplaintCard from '../../components/Card/ComplaintCard';

const SavedPosts = ({loggedInUserEmail}) => {
  const [saveComplaints, setSaveComplaints] = useState([]);

  useEffect(() => {
    const fetchSavedPosts = async () => {
      try {
        const savedPostsQuery = query(collection(db, 'saves'), where('userId', '==', loggedInUserEmail));
        const savedPostsSnapshot = await getDocs(savedPostsQuery);
        const savedPosts = savedPostsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const complaintsPromises = savedPosts.map(async savedPost => {
          const complaintDocRef = doc(db, 'cases', savedPost.complaintId);
          const complaintDocSnapshot = await getDoc(complaintDocRef);
          if (complaintDocSnapshot.exists()) {
            return { id: complaintDocSnapshot.id, ...complaintDocSnapshot.data() };
          } else {
            return null; // Handle case where complaint is not found
          }
        });

        const saveComplaints = await Promise.all(complaintsPromises);
        setSaveComplaints(saveComplaints.filter(complaint => complaint !== null));
      } catch (error) {
        console.error('Error fetching saved posts:', error);
      }
    };

    fetchSavedPosts();
  }, [loggedInUserEmail]);
  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Saved Posts</h3>
      {saveComplaints.length > 0 ? (
        <ComplaintCard complaints={saveComplaints} userEmail={loggedInUserEmail} />
      ) : (
        <p>No complaints found.</p>
      )}
    </div>
  );
};

export default SavedPosts;
