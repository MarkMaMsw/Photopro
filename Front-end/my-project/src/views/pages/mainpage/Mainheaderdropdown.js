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
          <CImg
            src={'avatars/9.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" /> 
          Purchased
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" /> 
          Portfolio
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" /> 
          Collection
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" /> 
          Like
          <CBadge color="danger" className="mfs-auto">99</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" /> 
          Comments
          <CBadge color="warning" className="mfs-auto">28</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" /> 
          Payments
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" /> 
          Privacy
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-account-logout" className="mfe-2" /> 
          <Link to="/login">Log out</Link>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default Mainheaderdropdown
