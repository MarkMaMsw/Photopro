import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
} from '@coreui/react'
import ExplorerProfileHeaderDropdown from './ExplorerProfileHeaderDropdown';
import styles from './ExplorerProfile.module.css'
import { Link } from 'react-router-dom';

const ExplorerProfileHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <Link to='/' className={styles.link}><h1>PhotoPro</h1></Link>
      </CHeaderBrand>

      <CHeaderNav className="px-3 ml-auto">
        <ExplorerProfileHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default ExplorerProfileHeader;
