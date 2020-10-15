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

const Mainheaderdropdowntasks = () => {
  const itemsCount = 5
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-pencil" />
        {/* <CBadge shape="pill" color="warning">{itemsCount}</CBadge> */}
      </CDropdownToggle>
      {/* <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong> 2 photos are being checked.</strong>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">Sunny day in Syndey <span className="float-right"><strong>25%</strong></span></div>
          <CProgress size="xs" color="info" value={25} />
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">Rose in the garden <span className="float-right"><strong>75%</strong></span></div>
          <CProgress size="xs" color="success" value={75} />
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          { <strong>You have published {itemsCount} photos.</strong>}
        </CDropdownItem>
        <CDropdownItem><CIcon name="cil-filter-photo" /> Puppy in my house </CDropdownItem>
        <CDropdownItem><CIcon name="cil-filter-photo" /> Lakers wins</CDropdownItem>
        <CDropdownItem className="text-center border-top"><strong>View all works.</strong></CDropdownItem>
      </CDropdownMenu> */}
    </CDropdown>
  )
}

export default Mainheaderdropdowntasks