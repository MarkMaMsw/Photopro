import React from 'react'
import {
  CHeader,
  CHeaderNav,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import AuthorHeaderDropdown from './AuthorHeaderDropdown'
import styles from './author.module.css'

const AuthorHeader = () => {

  return (
    <CHeader withSubheader>
      <Link to='/main' className={styles.link}><h1 className={styles.brand}>PhotoPro</h1></Link>
      <CHeaderNav className="px-3 ml-auto">
        <AuthorHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default AuthorHeader