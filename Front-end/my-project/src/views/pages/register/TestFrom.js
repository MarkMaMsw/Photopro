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
  CInputFile
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Testfrom = () => {
  const [img, setImg] = useState('');
  
  const imageOnchange = (e) => {
    console.log(e.target.files);
  }

  const sendImage = () => {
    console.log(img)
  }
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">

              

               


                {/* <CForm action="http://34.87.211.156:5000/image" method="POST" encType="multipart/form-data"> */}
                <CForm >
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputFile  placeholder="image" onChange={e => {
                      imageOnchange(e);
                    }}/>
                  </CInputGroup>

                  <CButton color="success" type="submit" onClick={sendImage}>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Testfrom
