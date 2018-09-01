import React from 'react'

import './styles.css'

export const Profile = () => (
    <div className="profile">
        <div
          className="profile-picture"
          style={{
            backgroundImage: `url(${localStorage.getItem('profilePicture')})`,
          }}
        />

        <span className="profile-name">Oi, Pedro</span>
    </div>
)