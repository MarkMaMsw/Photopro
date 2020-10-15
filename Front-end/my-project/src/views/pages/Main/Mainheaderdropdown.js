import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom';

const Mainheaderdropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          Sign in/up
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
            <Link to='/login'>Sign in</Link>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
            <Link to='/register'>Sign up</Link>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default Mainheaderdropdown
