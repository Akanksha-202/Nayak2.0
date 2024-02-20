// // // ProfilePage.js
// // import React from 'react';
// // import ProfileHeader from './ProfileHeader';
// // import Complaints from './Mycomplaints';
// // import SavedPosts from './SavedPosts';
// // import ReachOut from './ReachOut';

// // const Profile = ({ avatarUrl, username }) => {
// //   return (
// //     <div className="container mx-auto px-4">
// //       <ProfileHeader avatarUrl={"https://res.cloudinary.com/damtnzoo8/image/upload/v1708441790/%D0%A1%D1%82%D0%BE%D1%80%D0%B8%D1%81%D0%BC%D0%B5%D0%B9%D0%BA%D0%B5%D1%80___%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F_gz1auo.jpg"} username={"samiksha"} />
// //       <Complaints />
// //       <SavedPosts />
// //       <ReachOut />
// //     </div>
// //   );
// // };

// // export default Profile;

// // ProfilePage.js
// import React, { useState } from 'react';
// import ProfileHeader from './ProfileHeader';
// import Complaints from './Mycomplaints';
// import SavedPosts from './SavedPosts';
// import ReachOut from './ReachOut';

// const Profile = ({ avatarUrl, username }) => {
//   const [activeSection, setActiveSection] = useState('complaints');

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <ProfileHeader avatarUrl={"https://res.cloudinary.com/damtnzoo8/image/upload/v1708441790/%D0%A1%D1%82%D0%BE%D1%80%D0%B8%D1%81%D0%BC%D0%B5%D0%B9%D0%BA%D0%B5%D1%80___%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F_gz1auo.jpg"} username={'SAM'} />
//       <div className="flex justify-center mb-4">
//         <button
//           className={`mx-2 px-4 py-2 ${activeSection === 'complaints' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => handleSectionChange('complaints')}
//         >
//           My Complaints
//         </button>
//         <button
//           className={`mx-2 px-4 py-2 ${activeSection === 'savedPosts' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => handleSectionChange('savedPosts')}
//         >
//           Saved Posts
//         </button>
//         <button
//           className={`mx-2 px-4 py-2 ${activeSection === 'reachOut' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => handleSectionChange('reachOut')}
//         >
//           Reach Out
//         </button>
//       </div>
//       <div className="mb-4">
//         {activeSection === 'complaints' && <Complaints />}
//         {activeSection === 'savedPosts' && <SavedPosts />}
//         {activeSection === 'reachOut' && <ReachOut />}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// // ProfilePage.js
// import React, { useState } from 'react';
// import ProfileHeader from './ProfileHeader';
// import Complaints from './Mycomplaints';
// import SavedPosts from './SavedPosts';
// import ReachOut from './ReachOut';

// const Profile = ({ avatarUrl, username }) => {
//   const [activeSection, setActiveSection] = useState('complaints');
//   const [isProfilePublic, setIsProfilePublic] = useState(true); // Assuming default is public
//   const [numSavedPosts, setNumSavedPosts] = useState(0); // Number of saved posts
//   const [numMyPosts, setNumMyPosts] = useState(0); // Number of posts by user
//   const [reachOutRequests, setReachOutRequests] = useState([]); // List of reach out requests
//   const [sortBy, setSortBy] = useState('latest'); // Default sort by latest

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const toggleProfilePrivacy = () => {
//     setIsProfilePublic((prev) => !prev);
//   };

//   const handleSortByChange = (value) => {
//     setSortBy(value);
//   };

//   // You can implement functionality for changing avatar and username here

//   return (
//     <div className="container mx-auto px-4">
//       <ProfileHeader avatarUrl={"https://res.cloudinary.com/damtnzoo8/image/upload/v1708441790/%D0%A1%D1%82%D0%BE%D1%80%D0%B8%D1%81%D0%BC%D0%B5%D0%B9%D0%BA%D0%B5%D1%80___%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F_gz1auo.jpg"} username={'Samiksha'} />
//       <div className="flex justify-center mb-4">
//         <button
//           className={`mx-2 px-4 py-2 ${activeSection === 'complaints' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => handleSectionChange('complaints')}
//         >
//           My Complaints
//         </button>
//         <button
//           className={`mx-2 px-4 py-2 ${activeSection === 'savedPosts' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => handleSectionChange('savedPosts')}
//         >
//           Saved Posts ({numSavedPosts})
//         </button>
//         <button
//           className={`mx-2 px-4 py-2 ${activeSection === 'reachOut' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => handleSectionChange('reachOut')}
//         >
//           Reach Out ({reachOutRequests.length})
//         </button>
//       </div>
//       <div className="mb-4">
//         {activeSection === 'complaints' && <Complaints />}
//         {activeSection === 'savedPosts' && <SavedPosts />}
//         {activeSection === 'reachOut' && <ReachOut />}
//       </div>
//       <div className="flex justify-between mb-4">
//         <div>
//           Profile Photo: {isProfilePublic ? 'Public' : 'Private'}{' '}
//           <button onClick={toggleProfilePrivacy}>{isProfilePublic ? 'Make Private' : 'Make Public'}</button>
//         </div>
//         <div>
//           Sort By:{' '}
//           <select value={sortBy} onChange={(e) => handleSortByChange(e.target.value)}>
//             <option value="latest">Latest</option>
//             <option value="oldest">Oldest</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// ProfilePage.js
import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import Complaints from './Mycomplaints';
import SavedPosts from './SavedPosts';
import ReachOut from './ReachOut';

const Profile = ({ avatarUrl, username }) => {
  const [activeSection, setActiveSection] = useState('complaints');
  const [isProfilePublic, setIsProfilePublic] = useState(true); // Assuming default is public
  const [numSavedPosts, setNumSavedPosts] = useState(0); // Number of saved posts
  const [numMyPosts, setNumMyPosts] = useState(0); // Number of posts by user
  const [reachOutRequests, setReachOutRequests] = useState([]); // List of reach out requests
  const [sortBy, setSortBy] = useState('latest'); // Default sort by latest

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleProfilePrivacy = () => {
    setIsProfilePublic((prev) => !prev);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  // You can implement functionality for changing avatar and username here

  return (
    <div className="container mx-auto px-4">
      <ProfileHeader avatarUrl={"https://res.cloudinary.com/damtnzoo8/image/upload/v1708441790/%D0%A1%D1%82%D0%BE%D1%80%D0%B8%D1%81%D0%BC%D0%B5%D0%B9%D0%BA%D0%B5%D1%80___%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F_gz1auo.jpg"} username={'Samiksha'} />
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
            Saved Posts ({numSavedPosts})
          </button>
          <button
            className={`mx-2 px-4 py-2 ${activeSection === 'reachOut' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleSectionChange('reachOut')}
          >
            Reach Out ({reachOutRequests.length})
          </button>
        </div>
      </div>
      <div className="mb-4 mt-4">
        {activeSection === 'complaints' && <Complaints />}
        {activeSection === 'savedPosts' && <SavedPosts />}
        {activeSection === 'reachOut' && <ReachOut />}
      </div>
      <div className="flex justify-between mb-4">
        {/* <div>
          Profile Photo: {isProfilePublic ? 'Public' : 'Private'}{' '}
          <button onClick={toggleProfilePrivacy}>{isProfilePublic ? 'Make Private' : 'Make Public'}</button>
        </div> */}
        <div>
          Sort By:{' '}
          <select value={sortBy} onChange={(e) => handleSortByChange(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Profile;


