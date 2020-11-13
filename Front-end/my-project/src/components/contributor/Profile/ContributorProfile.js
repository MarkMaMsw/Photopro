import React,{ useState, useEffect } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CRow,
    CCol,
    CFormGroup,
    CTextarea,
    CInput,
    CLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'


const ContributorProfile = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [usertype, setUsertype] = useState('')
    const [balance, setBalance] = useState(0)
    const [description, setDescription] = useState('')
    const [warning, setWarning] = useState(false)

    
    useEffect(() => {
      axios.get('http://13.55.8.94:5000/contributor', {
        headers: {   
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          },
        })
        .then(res => {
            console.log(res);
            setUsername(res.data.content.username);
            setEmail(res.data.content.email);
            setUsertype(res.data.content.userType);
            setBalance(res.data.content.balance);
            setDescription(res.data.content.description);
            sessionStorage.setItem('userid', res.data.content.id);
          })
        .catch(err => {
          console.log(err)
          setWarning(!warning)
        });
  });

  return(
    <CRow alignHorizontal='center'>
          <CCol xs="12" sm="10">
            <CCard>
              <CCardHeader>
                Personal Detail
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="nickname">Username</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="Username-input" defaultValue={username} disabled={true} readOnly={true}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-add" defaultValue={email} disabled={true}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="Usertype">Usertype</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="usertype"  defaultValue={usertype} disabled={true}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="balance">Balance</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="balance" defaultValue={balance} disabled={true}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      defaultValue={description}
                      disabled={true}
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
              {/* <CCardFooter>
                <CButton type="submit" size="sm" color="success" ><CIcon name="cil-scrubber" /> Submit</CButton>
              </CCardFooter> */}
            </CCard>
            
          </CCol>
      </CRow>
    )
}
export default ContributorProfile;
