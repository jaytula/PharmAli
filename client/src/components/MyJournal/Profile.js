import React from 'react';

function Profile({ user }) {

  return (
    <aside>
      <div className="profile">
        {user.image && (
          <img className="profile-image" src={user.image} alt=""/>
        )}
      </div>
      <div className="profile-name">
        <h2><span className="profile--bold">{user.name}</span></h2>
      </div>
    </aside>
  )
}

export default Profile;