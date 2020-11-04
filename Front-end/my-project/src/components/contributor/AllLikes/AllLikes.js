import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styles from '../AllComments/AllComments.module.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  
  const usersData = [
    {id: 0, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*'},
    {id: 1, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*'},
    {id: 2, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*'},
    {id: 3, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*'},
    {id: 4, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*'},
  ]
  
  const fields = ['name', 'time', 'image']
  
  const AllLikes = () => {
    return (
      <>
        <CRow alignHorizontal='center'>  
          <CCol xs="12" md='10'>
            <CCard>
              <CCardHeader>
                All Likes from explorers
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots = {{
                  'image':
                    (item)=>(
                      <td>
                        <img src={item.image} alt="" className={styles.commentImage}></img>
                      </td>
                    )
                }}
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
  
  export default AllLikes;