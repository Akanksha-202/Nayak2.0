import React, { useState} from 'react';
import ProfileHeader from './ProfileHeader';
import Complaints from './Mycomplaints';
import SavedPosts from './SavedPosts';
import ReachOut from './ReachOut';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Profile = ({ avatarUrl, username, email }) => {
  const [activeSection, setActiveSection] = useState('complaints');
  const [sortBy, setSortBy] = useState('latest');


  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <ProfileHeader avatarUrl= {avatarUrl} username={username} />
        <div className="mt-8 mb-4">
          <div className="flex justify-center">
            <button
              className={`mx-2 px-4 py-2 ${activeSection === 'complaints' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSectionChange('complaints')}
            >
              My Complaints
            </button>
            <button
              className={`mx-2 px-4 py-2 ${activeSection === 'savedPosts' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSectionChange('savedPosts')}
            >
              Saved Posts
            </button>
            <button
              className={`mx-2 px-4 py-2 ${activeSection === 'reachOut' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSectionChange('reachOut')}
            >
              Reach Out 
            </button>
          </div>
        </div>
        <div className="mb-4 mt-4">
          {activeSection === 'complaints' && <Complaints loggedInUserEmail={email} />}
          {activeSection === 'savedPosts' && <SavedPosts loggedInUserEmail={email} />}
          {activeSection === 'reachOut' && <ReachOut loggedInUserEmail={email} />}
        </div>
        {/* <div className="flex justify-between mb-4">
          <div>
            Sort By:{' '}
            <select value={sortBy} onChange={(e) => handleSortByChange(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
