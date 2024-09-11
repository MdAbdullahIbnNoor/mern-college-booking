import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const currentUser = auth.currentUser;
  //   if (currentUser) {
  //     setUser(currentUser);
  //     setName(currentUser.displayName);
  //     setEmail(currentUser.email);
  //     // Fetch additional profile info from database here
  //   }
  // }, []);

  const handleSave = async () => {
    try {
      if (user) {
        await user.updateProfile({ displayName: name });
        setEditMode(false);
      }
      // Save university and address to the database here
    } catch (error) {
      console.error('Profile Update Error:', error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div>
        {editMode ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
              placeholder="Email"
            />
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="University"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>University: {university}</p>
            <p>Address: {address}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
