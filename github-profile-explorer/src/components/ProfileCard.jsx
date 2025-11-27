import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt={profile.login} />
      <h2>{profile.name || profile.login}</h2>
      <p>{profile.bio}</p>
      <p>Followers: {profile.followers} | Following: {profile.following}</p>
      <p>Public Repos: {profile.public_repos}</p>
      <a href={profile.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProfileCard;
