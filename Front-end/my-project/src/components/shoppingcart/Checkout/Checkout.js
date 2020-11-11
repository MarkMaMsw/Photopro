import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCardImg,
  CFormGroup,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from  '@coreui/react'
import Axios from 'axios'
import styles from './Checkout.module.css'



const Checkout = (props) => {
    const {checkoutList,totalPrice} = props
    const [danger,setDanger] = useState(false)
    const [success,setSuccess] = useState(false)
    const [warning,setWarning] = useState(false)
    const [warning1,setWarning1] = useState(false)
    const history = useHistory();
    const payment = async ()=>{
      if (checkoutList.length==0){
        setWarning1(!warning1)
      }else{
        var body = {
          image: checkoutList
        }
        await Axios.post('http://13.55.8.94:5000/order',body, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(res=> {
          setSuccess(!success)
        })
        .catch(error => {
          if(error.response.status==410){
            setDanger(!danger)
          }
        });
      }
      
    }
    return (
              <div>
                <CCard>
                  <CCardBody>
                    <CCol>

                      <CRow alignHorizontal='center'>
                      <CButton color="primary" className="px-4" onClick={() => setWarning(!warning)}>Check Out</CButton>                    
                      </CRow>

                      <CRow>
                          <h1>Item number: {checkoutList.length}</h1>
                      </CRow>
                      
                      <CRow>
                          <h1>Total Price: {totalPrice}</h1>
                      </CRow>

                    </CCol>
                  </CCardBody>

                  <CCardFooter className={styles.cardfooter}>
                  </CCardFooter>
                </CCard>

                <CModal 
                  show={success} 
                  onClose={() => setSuccess(!success)}
                  color="success"
                >
                  <CModalHeader closeButton>
                    <CModalTitle>Successful Payment</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    Congratulations!! This transaction is successful!
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="success" onClick={() => {setSuccess(!success);history.push("/explorerprofile/purchase")}}>OK</CButton>
                  </CModalFooter>
                </CModal>

                {/* a notice card which will show if register unsuccessfully */}
                <CModal 
                show={warning} 
                onClose={() => setWarning(!warning)}
                color="warning"
                >
                  <CModalHeader closeButton>
                    <CModalTitle>Checkout Confirm</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    Do you confirm this transaction?
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="warning" onClick={() => {setWarning(!warning);payment(); }}>Of Course</CButton>
                    <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
                  </CModalFooter>
                </CModal>

                <CModal 
                show={warning1} 
                onClose={() => setWarning1(!warning1)}
                color="warning"
                >
                  <CModalHeader closeButton>
                    <CModalTitle>Please Select</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    At least select one option
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setWarning1(!warning1)}>OK</CButton>
                  </CModalFooter>
                </CModal>


                <CModal 
                show={danger} 
                onClose={() => setDanger(!danger)}
                color="danger"
                >
                  <CModalHeader closeButton>
                    <CModalTitle>Checkout Fail</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    Balance not enough
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setDanger(!danger)}>OK</CButton>
                  </CModalFooter>
                </CModal>

                
              </div>
              

    );
}
export default Checkout;