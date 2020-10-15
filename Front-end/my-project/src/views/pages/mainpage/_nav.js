import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Range Research',
    to: '/dashboard',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Standard']
  },
  {
    _tag: 'CSidebarNavItem',
    name: '400*800',
    icon: 'cil-inbox',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '1920*1080',
    icon: 'cil-inbox',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '4K',
    icon: 'cil-inbox',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Category']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Animal',
    route: '/base',
    icon: 'cil-animal',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Puppy',
        icon: 'cil-dog',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Kitty',
        icon: 'cil-cat',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Insect',
        icon: 'cil-bug',
      },  
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Plant',
    route: '/buttons',
    icon: 'cil-plant',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Flower',
        icon: 'cil-flower',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fruit',
        icon: 'cil-lemon',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Weather',
    route: '/icons',
    icon: 'cil-cloud',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sunny',
        icon: 'cil-sun',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rainy',
        icon: 'cil-rain',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cloudy',
        icon: 'cil-cloudy',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sports',
    route: '/notifications',
    icon: 'cil-running',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Football',
        icon: 'cil-football',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Basketball',
        icon: 'cil-basketball',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tennis',
        icon: 'cil-tennis',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Baseball',
        icon: 'cil-baseball',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Price'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Range',
    route: '/pages',
    icon: 'cil-money',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '0-10',
        icon: 'cil-dollar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '10-30',
        icon: 'cil-dollar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '30-50',
        icon: 'cil-dollar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '50+',
        icon: 'cil-dollar',
      },
    ],
  },


]

