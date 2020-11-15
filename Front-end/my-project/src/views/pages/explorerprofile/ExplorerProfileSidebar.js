import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'
import styles from './ExplorerProfile.module.css'

// sidebar nav config
import navigation from './_nav'

const ExplorerProfileSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <h1 className="c-sidebar-brand-full"><Link to="/" className={styles.link}>PhotoPro</Link></h1>
        <h1 className="c-sidebar-brand-minimized"><Link to="/" className={styles.link}>P</Link></h1>
      </CSidebarBrand>
      <div className={styles.sidebar_avatar}>
        <CImg
            src={sessionStorage.getItem('avatar')}
            className="c-avatar-img"
            alt="avatars"
          />
      </div>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(ExplorerProfileSidebar);
