import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons';

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    to: '/explorerprofile/profile',
    icon: <CIcon content={freeSet.cilUser} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'My Collection',
    to: '/explorerprofile',
    icon: <CIcon content={freeSet.cilFilterPhoto} customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Flower',
        to: '/explorerprofile',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Animal',
        to: '/explorerprofile',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sport',
        to: '/explorerprofile',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Comments',
    to: '/explorerprofile',
    icon: <CIcon content={freeSet.cilCommentSquare} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Likes',
    to: '/explorerprofile',
    icon: <CIcon content={freeSet.cilHeart} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Purchase',
    to: '/explorerprofile',
    icon: <CIcon content={freeSet.cilDollar} customClasses="c-sidebar-nav-icon"/>
  },
]

