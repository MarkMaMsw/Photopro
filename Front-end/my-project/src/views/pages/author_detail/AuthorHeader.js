import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
} from '@coreui/react'
import AuthorHeaderDropdown from './AuthorHeaderDropdown'
import styles from './author.module.css'

const AuthorHeader = () => {

  return (
    <CHeader withSubheader>
      <h1 className={styles.brand}>PhotoPro</h1>
      <CHeaderNav className="px-3 ml-auto">
        <AuthorHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default AuthorHeader