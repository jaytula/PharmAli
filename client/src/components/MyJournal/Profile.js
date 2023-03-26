import React from 'react';
import profileImage from '../../assets/images/avatarPharmali.jpeg';

function Profile({ user }) {

  return (
    <aside>
      <div className="profile">
        {profileImage && (
          <img className="profile-image" src={profileImage} alt=""/>
        )}
      </div>
      <div className="profile-name">
        <h2><span className="profile--bold">{user}</span></h2>
      </div>
    </aside>
  )
}

export default Profile;