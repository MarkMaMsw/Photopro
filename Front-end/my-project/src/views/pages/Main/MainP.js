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
  CLink,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CPagination,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import './Mainpage.css';
import Mainheader from './Mainheader';
import MainFooter from './TheFooter';

const slides = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3E%20%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]


const MainP = () => {
  const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <Mainheader/>
        <div>
        <CCard>
        <CCardBody>
          <CNavbar id='MainP-Navbar' light color="light">
            <CForm inline>
              <CInput id='main-searchbar'
                className="mr-sm-2"
                placeholder="Search"
                size="large"
              />
              <CButton id='MainP-button'color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
            </CForm>
          </CNavbar>
        </CCardBody>
      </CCard>
        </div>
        <div>
        <CCardHeader id='photocard-hard'>
            The most popular Pictures
          </CCardHeader>
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
      <CPagination 
            activePage={currentPage}
            pages={15}
            onActivePageChange={setCurrentPage}
          />
          <br></br>
      </div>
      <div>
      <CCol xs="10" xl="10" id='slide-col'>
        <CCard>
          <CCardHeader id='slidecard-hard'>
            The most popular contributors
          </CCardHeader>
          <CCardBody>
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>No. 1</h3></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>No. 2</h3></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>No. 3</h3></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
        
      </div>
      <MainFooter/>
      </div>
    </div>
    </>
  )
}

export default MainP
