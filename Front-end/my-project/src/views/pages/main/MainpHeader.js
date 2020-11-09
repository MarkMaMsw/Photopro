import React, { useState } from 'react'
import Axios from 'axios';
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
import MainpBeforeHeaderDropdown from './MainpBeforeHeaderDropdown'
import MainpAfterHeaderDropdown from './MainpAfterHeaderDropdown'
import styles from './MainpBefore.module.css'

const MainpHeader = () => {
  const usertype = sessionStorage.getItem('usertype');
  const [searchtype, setSearchtype] = useState('photo');
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
    // http://13.55.8.94:5000
    const json = {
      type: searchtype,
      keyword: keyword
    }
    console.log(json);
    Axios.post('http://13.55.8.94:5000/search', json)
    .then(res => console.log(res));
  }

  return (
    <CHeader withSubheader>
      <h1 className={styles.brand}>PhotoPro</h1>
      <CHeaderNav className="px-3 ml-auto">
      <CForm inline style={{width: '400px'}}>        
      <CFormGroup row>
        <CCol md="12">
          <CInputGroup style={{width: '400px'}}>
            <CSelect custom name="ccmonth" id="ccmonth" onChange={handleOnchange} value={searchtype}>
              <option value="photo">Photo</option>
              <option value="author">Author</option>
            </CSelect>
            <CInput id="input1-group3" name="input1-group3" placeholder="Search" style={{width: '200px'}} onChange={handleKeywordChange} value={keyword}/>
            <CButton color="info" className="my-2 my-sm-0" onClick={submitSearch}>Search</CButton>
          </CInputGroup>
        </CCol>
      </CFormGroup>
      </CForm>
        {usertype === 'explorer' ? <MainpAfterHeaderDropdown/> : <MainpBeforeHeaderDropdown/>}
      </CHeaderNav>
    </CHeader>
  )
}

export default MainpHeader;
