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
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import MainpBeforeHeaderDropdown from './MainpBeforeHeaderDropdown'
import MainpAfterHeaderDropdown from './MainpAfterHeaderDropdown'
import styles from './MainpBefore.module.css'

const MainpHeader = (props) => {
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

  const clickBrand = () => {
    props.setCurrentContent('mainpage');
  }

  return (
    <CHeader withSubheader>
      <h1 className={styles.brand} onClick={clickBrand}>PhotoPro</h1>
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
        <Link to='/shoppingcart'>
          <CIcon name="cil-cart" className={styles.shoppingcart}/>
        </Link>
        {usertype === 'explorer' ? <MainpAfterHeaderDropdown/> : <MainpBeforeHeaderDropdown/>}
      </CHeaderNav>
    </CHeader>
  )
}

export default MainpHeader;
