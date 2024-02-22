import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import './index.css';
import App from './App';
import Help from './pages/Help/Help'; 
import Helpline from './pages/Helpline/Helpline'; 
import Ngo from './pages/Ngo/Ngo'
import reportWebVitals from './reportWebVitals';
import ReachNgo from './pages/Ngo/ReachNgo';
import Donate from './pages/Ngo/Donate';
import CommunityWall  from './pages/CommunityWall/CommunityWall';
import Complaint from './pages/Complaint/Complaint';
import Profile from './pages/Profile/Profile';
import Case from './pages/Case/Case';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootComponent = () => {
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const [loggedInEmail, setLoggedInEmail] = useState(null);
  const [loggedInAvatar, setLoggedInAvatar] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setLoggedInUsername(user.displayName);
        setLoggedInEmail(user.email);
        setLoggedInAvatar(user.photoURL);
      } else {
        alert('First SignIn using Google ')
        setLoggedInUsername(null);
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  return (
    <React.StrictMode>
      <Router> 
        <Routes> 
          <Route exact path="/" element={<App />} /> 
          <Route path="/help" element={<Help />} /> 
          <Route path="/helpline" element={<Helpline />} /> 
          <Route path="/Ngo" element={<Ngo/>} /> 
          <Route path="/complaint" element={<Complaint />} /> 
          <Route path="/Ngo/reachNgo" element={<ReachNgo/>} /> 
          <Route path="/Ngo/donate" element={<Donate />} /> 
          <Route path='/community-wall' element={<CommunityWall userEmail={loggedInEmail} />} />
          <Route path="/community-wall/:title" element={<Case />} />
          {loggedInUsername && <Route path={`/profile/${loggedInUsername}`} element={<Profile avatarUrl={loggedInAvatar} username={loggedInUsername} email={loggedInEmail} />} />}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);
reportWebVitals();
