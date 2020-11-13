import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom';

const GuestHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CIcon name="cilUser" className="mfe-2"/>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem> 
          <Link to="/login"><CIcon name="cilUser" className="mfe-2" />Sign In</Link>
        </CDropdownItem>
        <CDropdownItem> 
          <Link to="/register"><CIcon name="cilUserFollow" className="mfe-2" />Sign Up</Link>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default GuestHeaderDropdown;
