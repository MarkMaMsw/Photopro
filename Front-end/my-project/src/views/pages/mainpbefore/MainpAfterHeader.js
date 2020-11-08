import React from 'react'
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
import styles from './MainpBefore.module.css'

const MainpBeforeHeader = () => {
  return (
    <CHeader withSubheader>
      <h1 className={styles.brand}>PhotoPro</h1>
      <CHeaderNav className="px-3 ml-auto">
      <CForm inline style={{width: '400px'}}>        
      <CFormGroup row>
        <CCol md="12">
          <CInputGroup style={{width: '400px'}}>
            <CSelect custom name="ccmonth" id="ccmonth">
              <option value="photo">Photo</option>
              <option value="author">Author</option>
            </CSelect>
            <CInput id="input1-group3" name="input1-group3" placeholder="Search" style={{width: '200px'}}/>

            <CButton color="info" className="my-2 my-sm-0">Search</CButton>
          </CInputGroup>
        </CCol>
      </CFormGroup>
      </CForm>
        <MainpBeforeHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default MainpBeforeHeader;
