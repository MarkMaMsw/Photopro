import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import styles from './Register.module.css'

const Register = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [usertype, setUsertype] = useState('explorer')
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [info, setInfo] = useState(false);
  const [message, setMessage] = useState('')

  const createAccount = () => {
    console.log('clicked');
    console.log(username, email, password, usertype)
    if (username && email && password && confirmPass){
      if (password === confirmPass){
        Axios.post('http://13.55.8.94:5000/register', {
          id: '',
          username: username,
          email: email,
          password: password,
          description: "This guy doesn't hava any description",
          photoURL: '',
          balance: 0,
          userType: usertype
        })
        .then(res => {
          console.log(res.status);
          setSuccess(!success);
        })
        .catch(err => {
          console.log(err);
          setWarning(!warning);
        });
      } else {
        setMessage("Password don't match.")
        setInfo(!info);
      }
    } else {
      setMessage("Please provide all information.");
      setInfo(!info);
    }
  }

  return (
    // <div className="c-app c-default-layout flex-row align-items-center">
    <div className={styles.container}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">

              {/* a notice card which will show if register successfully */}
              <CModal 
                show={success} 
                onClose={() => setSuccess(!success)}
                color="success"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Successful Regisration</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  Congratulations!! You have successfully registered, login now!
                </CModalBody>
                <CModalFooter>
                  <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}
                  <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
                </CModalFooter>
              </CModal>

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
                  User has already been registered, try again.
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
                  {message}
                </CModalBody>
                <CModalFooter>
                  <CButton color="info" onClick={() => setInfo(!info)}>OK</CButton>{' '}
                </CModalFooter>
              </CModal>


                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)}/>
                  </CInputGroup>
                  <CFormGroup row onChange={e => setUsertype(e.target.value)}>
                    <CCol md="3">
                      <CLabel>User Type</CLabel>
                    </CCol>
                    <CCol md="9">
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
                  <CButton color="success" block onClick={createAccount}>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <p className="text-muted">Already have account? <Link to="/login">Log in</Link></p>
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
