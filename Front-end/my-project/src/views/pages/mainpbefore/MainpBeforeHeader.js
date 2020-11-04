import React from 'react'
import {
  CHeader,
  CHeaderNav,
  CForm,
  CInput,
  CButton,
} from '@coreui/react'
import MainpBeforeHeaderDropdown from './MainpBeforeHeaderDropdown'
import styles from './MainpBefore.module.css'

const MainpBeforeHeader = () => {
  return (
    <CHeader withSubheader>
      <h1 className={styles.brand}>PhotoPro</h1>
      <CHeaderNav className="px-3 ml-auto">
      <CForm inline>
        <CInput
          className="mr-sm-2"
          placeholder="Search"
          size="md"
        />
        <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
      </CForm>
        <MainpBeforeHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default MainpBeforeHeader;
