import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styles from './AllComments.module.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  
  const usersData = [
    {id: 0, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 1, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 2, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 3, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 4, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 5, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 6, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 7, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 8, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
    {id: 9, name: 'John Doe', time: '2018/01/01', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*', comment: 'I like this cute dog! Soooooo CUTE!'},
  ]
  
  const fields = ['name', 'time', 'comment', 'image']
  
  const AllComments = () => {
    return (
      <>
        <CRow>  
          <CCol xs="12" lg="8">
            <CCard>
              <CCardHeader>
                All Comments from explorer
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
  
  export default AllComments;