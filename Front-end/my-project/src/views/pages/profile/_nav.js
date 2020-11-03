import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons';

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    to: '/profile',
    icon: <CIcon content={freeSet.cilUser} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Photoes',
    to: '/profile',
    icon: <CIcon content={freeSet.cilFilterPhoto} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Comments',
    to: '/profile/allcomments',
    icon: <CIcon content={freeSet.cilCommentSquare} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Likes',
    to: '/profile/alllikes',
    icon: <CIcon content={freeSet.cilHeart} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Purchase History',
    to: '/profile',
    icon: <CIcon content={freeSet.cilDollar} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Upload Photo',
    to: '/profile/imageuploadform',
    icon: <CIcon content={freeSet.cilCloudUpload} customClasses="c-sidebar-nav-icon"/>
  }
]

