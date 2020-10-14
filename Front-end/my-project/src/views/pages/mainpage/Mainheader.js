import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import './Mainheader.css'

// routes config
import routes from '/Users/jerrycom/Documents/9900/Fighting/capstone-project-comp9900-h16a-fighting/Front-end/my-project/src/routes.js'

import Mainheaderdropdown  from './Mainheaderdropdown'
import Mainheaderdropdownmssg  from './Mainheaderdropdownmssg'
import Mainheaderdropdownnotif from './Mainheaderdropdownnotif'
import Mainheaderdropdowntasks from './Mainheaderdropdowntasks'

const Mainheader = () => {
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
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav id='header-home' className="d-md-down-none mr-auto">
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">PhotoPro</CHeaderNavLink>
        </CHeaderNavItem>

      </CHeaderNav>

      <CHeaderNav className="px-3">
        <Mainheaderdropdownnotif/>
        <Mainheaderdropdowntasks/>
        <Mainheaderdropdownmssg/>
        <Mainheaderdropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default Mainheader
