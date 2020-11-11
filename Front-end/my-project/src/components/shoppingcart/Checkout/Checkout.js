import React, { useState } from 'react'
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
} from  '@coreui/react'
import axios from 'axios'
import styles from './Checkout.module.css'
import {Link} from 'react-router-dom'



const Checkout = (props) => {
    const {checkoutList,totalPrice} = props
    return (
              <CCard>
                <CCardBody>
                  <CCol>

                    <CRow alignHorizontal='center'>
                    <CButton color="primary" className="px-4" Link to="/Checkoutpage">Go To Check Out</CButton>                    
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

    );
}
export default Checkout;