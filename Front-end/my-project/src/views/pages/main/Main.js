import React from 'react'
import MainpHeader from './MainpHeader';
import Footer from '../../../components/resueable/Footer/Footer';
import MainpBeforeContent from './MainpBeforeContent';

const Profile = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <MainpHeader/>

        <div className="c-body">
          <MainpBeforeContent/>
        </div>
        <div className="c-body">
          
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Profile
