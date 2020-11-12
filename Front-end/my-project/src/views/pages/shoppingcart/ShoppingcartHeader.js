import React from 'react'
import {
  CHeader,
  CHeaderNav,
} from '@coreui/react'
import ShoppingcartDropdown from './ShoppingcartDropdown'

const ShoppingcartHeader = () => {
  return (
    <CHeader withSubheader>
      <div>
        <h3>PhotoPro</h3>
      </div>
      <CHeaderNav className="px-3 ml-auto">
        <ShoppingcartDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default ShoppingcartHeader