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
    _tag: 'CSidebarNavItem',
    name: 'My Collection',
    to: '/explorerprofile/collection',
    icon: <CIcon content={freeSet.cilFilterPhoto} customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Comments',
    to: '/explorerprofile/comments',
    icon: <CIcon content={freeSet.cilCommentSquare} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Likes',
    to: '/explorerprofile/likes',
    icon: <CIcon content={freeSet.cilHeart} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Shopping Cart',
    to: '/explorerprofile/shoppingcart',
    icon: <CIcon content={freeSet.cilCart} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Purchase',
    to: '/explorerprofile/purchase',
    icon: <CIcon content={freeSet.cilDollar} customClasses="c-sidebar-nav-icon"/>
  },
]

