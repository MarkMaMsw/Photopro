import React from 'react'
import ProfileSidebar from './ProfileSidebar';
import ProfileHeader from './ProfileHeader';
import Footer from '../../../components/resueable/Footer/Footer';
import ProfileContent from './ProfileContent';

const Profile = () => {

  return (
    <div className="c-app c-default-layout">
      <ProfileSidebar/>
      <div className="c-wrapper">
        <ProfileHeader/>
        <div className="c-body">
          <ProfileContent/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Profile
