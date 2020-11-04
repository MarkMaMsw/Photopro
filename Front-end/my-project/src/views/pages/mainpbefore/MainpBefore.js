import React from 'react'
import MainpBeforeHeader from './MainpBeforeHeader';
import Footer from '../../../components/resueable/Footer/Footer';
import MainpBeforeContent from './MainpBeforeContent';

const Profile = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <MainpBeforeHeader/>

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
