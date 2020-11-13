import React from 'react'
import {
  CHeader,
  CHeaderNav,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import AuthorHeaderDropdown from './AuthorHeaderDropdown'
import GuestHeaderDropdown from './GuestHeaderDropdown'
import styles from './author.module.css'

const AuthorHeader = () => {
  const usertype = sessionStorage.getItem('usertype');
  return (
    <CHeader withSubheader>
      <Link to='/' className={styles.link}><h1 className={styles.brand}>PhotoPro</h1></Link>
      <CHeaderNav className="px-3 ml-auto">
        {usertype === 'explorer' ? <AuthorHeaderDropdown/> : <GuestHeaderDropdown/>}
      </CHeaderNav>
    </CHeader>
  )
}

export default AuthorHeader