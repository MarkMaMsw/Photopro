import React, { useState } from 'react'
import MainpHeader from './MainpHeader';
import Footer from '../../../components/resueable/Footer/Footer';
import MainpBeforeContent from './MainpBeforeContent';
import SearchPhotoResult from './SearchPhotoResult'
import SearchAuthorResult from './SearchAuthorResult'

const Main = () => {
  const [searchtype, setSearchtype] = useState('image');
  const [keyword, setKeyword] = useState('123');
  // const [currentContent, setCurrentContent] = useState('mainpage')
  const [currentContent, setCurrentContent] = useState('searchphoto')
  // const [currentContent, setCurrentContent] = useState('searchauthor')
  console.log(keyword)
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <MainpHeader setSearchtype={setSearchtype} setKeyword={setKeyword} setCurrentContent={setCurrentContent}/>

        <div className="c-body">
          {currentContent === 'mainpage' && <MainpBeforeContent />}
          {currentContent === 'searchphoto' && <SearchPhotoResult keyword={keyword}/>}
          {currentContent === 'searchauthor' && <SearchAuthorResult keyword={keyword}/>} 
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Main;
