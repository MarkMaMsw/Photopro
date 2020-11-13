import React from 'react'
import {
  CHeader,
  CHeaderNav,
} from '@coreui/react';
import { Link } from 'react-router-dom';
import ShoppingcartDropdown from './ShoppingcartDropdown';

const ShoppingcartHeader = () => {
  return (
    <CHeader withSubheader>
        <Link to='/main'><h1>PhotoPro</h1></Link>
      <CHeaderNav className="px-3 ml-auto">
        <ShoppingcartDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default ShoppingcartHeader