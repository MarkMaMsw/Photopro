import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Mainheaderdropdownnotif = () => {
  const itemsCount = 5
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-cart"/>
        {/* <CBadge shape="pill" color="danger">{itemsCount}</CBadge> */}
      </CDropdownToggle>
      {/* <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have chosen {itemsCount} photos</strong>
        </CDropdownItem>
        <CDropdownItem><CIcon name="cil-satelite"  />  Best football match</CDropdownItem>
        <CDropdownItem><CIcon name="cil-satelite"  />  Lovely cat</CDropdownItem>
        <CDropdownItem><CIcon name="cil-satelite" />  Bettle in the garden</CDropdownItem>
        <CDropdownItem><CIcon name="cil-satelite"  />  Bad weather</CDropdownItem>
        <CDropdownItem><CIcon name="cil-satelite" />  Sun flowers</CDropdownItem>
        <CDropdownItem className="text-center border-top"><strong>View all items</strong></CDropdownItem>
      </CDropdownMenu> */}
    </CDropdown>
  )
}

export default Mainheaderdropdownnotif