// Profile.jsx

import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import Complaints from './Mycomplaints';
import SavedPosts from './SavedPosts';
import ReachOut from './ReachOut';
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const auth = getAuth(); // Get the authentication instance

const Profile = ({ avatarUrl, username }) => {
  const [activeSection, setActiveSection] = useState('complaints');
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [numSavedPosts, setNumSavedPosts] = useState(0);
  const [numMyPosts, setNumMyPosts] = useState(0);
  const [reachOutRequests, setReachOutRequests] = useState([]);
  const [sortBy, setSortBy] = useState('latest');
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleProfilePrivacy = () => {
    setIsProfilePublic((prev) => !prev);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const fetchLoggedInUserEmail = () => {
    const user = auth.currentUser;
    if (user) {
      const userEmail = user.email;
      setLoggedInUserEmail(userEmail);
    } else {
      console.error('No user logged in');
    }
  };

  useEffect(() => {
    fetchLoggedInUserEmail();
  }, []); // Call fetchLoggedInUserEmail only once when the component mounts

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <ProfileHeader avatarUrl={avatarUrl} username={username} />
        <div className="mt-8 mb-4">
          <div className="flex justify-center">
            {/* Buttons for different sections */}
          </div>
        </div>
        <div className="mb-4 mt-4">
          {activeSection === 'complaints' && <Complaints loggedInUserEmail={loggedInUserEmail} />} {/* Pass loggedInUserEmail to Mycomplaints */}
          {/* Render other sections based on activeSection */}
        </div>
        <div className="flex justify-between mb-4">
          {/* Sort by dropdown */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
