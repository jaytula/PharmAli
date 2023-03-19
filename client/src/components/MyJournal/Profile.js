import React from 'react';

function Profile({user}) {

  return (
    <aside>
      <div className="profile">
        {user.image && (
        <img className="profile-image" src={user.image}/>
        )}
      </div>
      <div className="profile-name">
        <h2><span className="profile--bold">{user.firstName}</span> {user.lastName}</h2>
      </div>
    </aside>
  )
}

  export default Profile;