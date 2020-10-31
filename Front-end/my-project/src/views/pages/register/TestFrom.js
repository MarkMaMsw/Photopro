import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInputFile
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Testfrom = () => {
  const [img, setImg] = useState('');
  
  const imageOnchange = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0])
  }

  const sendImage = (e) => {
    e.preventDefault()
    console.log(img)
    const formData = new FormData()
    formData.append('file', img);
    formData.append('title', 'dog');
    formData.append('price', 100);
    formData.append('status', 'on shop');
    formData.append('tag', 'dogs');

    console.log(formData)

    Axios.post('http://34.87.211.156:5000/image', formData, {
      headers: {
        "Content-type": "multipart/form-data",
        // "Content-Length": "<calculated when request is sent>",
        // "Accept": 
        // 'Authorization': `Bearer ${sessionStorage.getItem('token')}}`
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDM5Njk5NTQsIm5iZiI6MTYwMzk2OTk1NCwianRpIjoiZjYwODA2ZjQtYjAyZC00NjJiLWFiMmUtZDIxMTI2OWQyMDE4IiwiaWRlbnRpdHkiOnsidXNlciI6InJpY2tAZ21haWwuY29tIiwidHlwZSI6ImNvbnRyaWJ1dG9yIiwiaWQiOiIyIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.VQjztnQByO2ddzfXzeAFOkH5AcOmCjjzBLNLwxaesO0`
      }
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

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

                  <CButton color="success" type="submit" onClick={e => sendImage(e)}>Create Account</CButton>
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
