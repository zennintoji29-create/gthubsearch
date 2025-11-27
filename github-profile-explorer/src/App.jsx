import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import './styles.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  const fetchProfile = async (username) => {
    try {
      setError('');
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (data.message) {
        setProfile(null);
        setError('User not found!');
      } else {
        setProfile(data);
      }
    } catch (err) {
      setProfile(null);
      setError('Error fetching profile');
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub Profile Explorer</h1>
      <SearchBar onSearch={fetchProfile} />
      {error && <p className="error">{error}</p>}
      {profile && <ProfileCard profile={profile} />}
    </div>
  );
}

export default App;
