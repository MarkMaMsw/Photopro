import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CContainer, CFade } from '@coreui/react'
import ProfileSidebar from './ProfileSidebar';
import ProfileHeader from './ProfileHeader';
import ProfileFooter from './ProfileFooter';
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
        <ProfileFooter/>
      </div>
    </div>
  )
}

export default Profile
