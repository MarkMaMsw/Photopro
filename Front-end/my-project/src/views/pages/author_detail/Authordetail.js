import React from 'react'
import AuthorContent from './AuthorContent';
import AuthorHeader from './AuthorHeader';
import Footer from '../../../components/resueable/Footer/Footer';

const Authordetail = (props) => {
  console.log(props);
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <AuthorHeader/>
        <div className="c-body">
          <AuthorContent history={props}/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Authordetail