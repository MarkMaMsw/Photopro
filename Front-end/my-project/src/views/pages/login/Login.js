import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup, 
  CInputRadio, 
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import styles from './Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('explorer')
  const [warning, setWarning] = useState(false)
  const [info, setInfo] = useState(false);

  const history = useHistory();

  const sendUserInfo = () => {
    console.log(username, password, usertype);
    if (username && password && usertype){
      Axios.post('http://13.55.8.94:5000/login', {
          username: username,
          password: password,
          userType: usertype
        })
        .then(res => {
          console.log(res)
          sessionStorage.setItem('token', res.data.access_token);
          if (usertype === 'explorer'){
            sessionStorage.setItem('usertype', 'explorer');
            history.push("/main");
          } else if (usertype === 'contributor'){
            history.push("/profile/contributorprofile");
            sessionStorage.setItem('usertype', 'contributor');
          }
        })
        .catch(err => {
          console.log(err)
          setWarning(!warning)
        });
    } else {
      setInfo(!info)
    }
  }

  useEffect(() => {
    sessionStorage.clear();
  });

  return (
    // <div className="c-app c-default-layout flex-row align-items-center">
      <div className={styles.container}> 
      <CContainer >
         {/* a notice card which will show if register unsuccessfully */}
         <CModal 
          show={warning} 
          onClose={() => setWarning(!warning)}
          color="warning"
          >
            <CModalHeader closeButton>
              <CModalTitle>Conflict</CModalTitle>
            </CModalHeader>
            <CModalBody>
              Invalid Username or Password, Try again.
            </CModalBody>
            <CModalFooter>
              <CButton color="warning" onClick={() => setWarning(!warning)}>Try again</CButton>{' '}
              <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
            </CModalFooter>
          </CModal>

          {/* a notice card which will show if any notice */}
          <CModal 
          show={info} 
          onClose={() => setInfo(!info)}
          color="info"
          >
            <CModalHeader closeButton>
              <CModalTitle>Notice</CModalTitle>
            </CModalHeader>
            <CModalBody>
              Please provide all information
            </CModalBody>
            <CModalFooter>
              <CButton color="info" onClick={() => setInfo(!info)}>OK</CButton>{' '}
            </CModalFooter>
          </CModal>



        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
            <CCard id="login-left-card" className="text-white bg-primary py-5 d-md-down-none">
                <CCardBody className="text-center">
                  <div>
                    <Link to='/main' style={{color: 'white'}}>
                      <h1 id="photo-pro-icon" className="dark">PhotoPro</h1>
                    </Link>
                    <p>Find your favourite photo!</p>
                  </div>
                </CCardBody>
              </CCard>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="username" value={username} onChange={ e => setUsername(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={ e => setPassword(e.target.value)}/>
                    </CInputGroup>

                    <CFormGroup row onChange={e => setUsertype(e.target.value)}>
                      <CCol md="4">
                        <CLabel>User Type:</CLabel>
                      </CCol>
                      <CCol md="8">
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio custom id="user-type-radio1" name="user-type" value="explorer" defaultChecked/>
                          <CLabel variant="custom-checkbox" htmlFor="user-type-radio1">Explorer</CLabel>
                        </CFormGroup>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio custom id="user-type-radio2" name="user-type" value="contributor" />
                          <CLabel variant="custom-checkbox" htmlFor="user-type-radio2">Contributor</CLabel>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>

                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={sendUserInfo}>Login</CButton>
                      </CCol>
                    </CRow>
                    <p className="text-muted">Don't have account? <Link to="/register">Register Now!</Link></p>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      </div>
    // </div>
  )
}

export default Login
