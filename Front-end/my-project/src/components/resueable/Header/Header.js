import React, { useState, useEuseEffect } from 'react'
import {
  CHeader,
  CHeaderNav,
  CForm,
  CInput,
  CButton,
  CFormGroup,
  CInputGroup,
  CCol,
  CSelect
} from '@coreui/react'
import { Link } from 'react-router-dom'
import BeforeHeaderDropdown from './BeforeHeaderDropdown'
import AfterHeaderDropdown from './AfterHeaderDropdown'
import styles from './Header.module.css'

const Header = (props) => {
  const usertype = sessionStorage.getItem('usertype');

  const [searchtype, setSearchtype] = useState('image');
  const [keyword, setKeyword] = useState('');

  const handleOnchange = (e) => {
    console.log(e.target.value);
    setSearchtype(e.target.value);
  }

  const handleKeywordChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  }

  const submitSearch = () => {
    if (keyword){
      props.setSearchtype(searchtype);
      props.setKeyword(keyword);
      if (searchtype === 'image'){
        props.setCurrentContent('searchphoto');
      } else {
        props.setCurrentContent('searchauthor');
      }
    }
  }

  // const clickBrand = () => {
  //   props.setCurrentContent('mainpage');
  // }

  return (
    <CHeader withSubheader>
      {/* <Link to='/main'><h1 className={styles.brand} onClick={clickBrand}>PhotoPro</h1></Link> */}
      <Link to='/main' className={styles.link}><h1 className={styles.brand}>PhotoPro</h1></Link>
      
      <CHeaderNav className="px-3 ml-auto">
      <CForm inline style={{width: '400px'}}>        
      <CFormGroup row>
        <CCol md="12">
          <CInputGroup style={{width: '400px'}}>
            <CSelect custom name="ccmonth" id="ccmonth" onChange={handleOnchange} value={searchtype}>
              <option value="image">Photo</option>
              <option value="contributor">Author</option>
            </CSelect>
            <CInput id="input1-group3" name="input1-group3" placeholder="Search" style={{width: '200px'}} onChange={handleKeywordChange} value={keyword}/>
            <CButton color="info" className="my-2 my-sm-0" onClick={submitSearch}>Search</CButton>
          </CInputGroup>
        </CCol>
      </CFormGroup>
      </CForm>
        {usertype === 'explorer' ? <AfterHeaderDropdown/> : <BeforeHeaderDropdown/>}
      </CHeaderNav>
    </CHeader>
  )
}

export default Header;
