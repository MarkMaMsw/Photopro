import React,{Component,useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CNavbar,
  CForm,
  CInput,
  CButton,
  CImg,
  CBadge,
  CCardFooter,
  CCol,
  CRow,
  CFade,
  CSwitch,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import './Mainpage.css';
import navigation from './_nav'
import { useSelector, useDispatch } from 'react-redux'
import { DocsLink } from 'src/reusable'
import Mainsidebar from './Mainsidebar'
import Mainheader from './Mainheader';
import MainFooter from '../Main/TheFooter';



const Mainpage = () => {
  class LikeButton extends Component {
    constructor (props) {
      super(props)
      this.state = { isLiked: false }
    }
  
    onClick () {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }
  
    render () {
      return (
        <button class='like-btn' style="background-color: ${this.props.bgColor}">
          <span class='like-text'>
            ${this.state.isLiked ? '取消' : '点赞'}
          </span>
          <span>👍</span>
        </button>
      )
    }
  }
  return (
    <>
    <div className="c-app c-default-layout">
      <Mainsidebar/>
      <div className="c-wrapper">
        <Mainheader/>
        <div>
        <CCard>
        <CCardBody>
          <CNavbar light color="light">
            <CForm inline>
              <CInput id='main-searchbar'
                className="mr-sm-2"
                placeholder="Search"
                size="large"
              />
              <CButton color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
            </CForm>
          </CNavbar>
        </CCardBody>
      </CCard>
        </div>
        <div>
        <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/001.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"/>

            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
            <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
            </div>
            </CCardFooter>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/002.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/004.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/005.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/007.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/008.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/009.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/001.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <CImg
                  src={'avatars/002.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
            </CCardBody>
            <CCardFooter>
              <h1> Title: Wonderful Car </h1>
              <h2> Tags:...  </h2>
            <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      </div>
      <MainFooter/>
      </div>
    </div>
    </>
  )
}

export default Mainpage
