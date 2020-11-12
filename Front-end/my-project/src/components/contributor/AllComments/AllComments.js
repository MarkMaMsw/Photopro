import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './AllComments.module.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  

  const fields = ['name', 'comment_time', 'comment', 'image']
  
  class AllComments extends React.Component {
    //class AllLikes extends React.Component {
      constructor(){
        super();
        this.state = {
          userData: [],
        }
      }
       
      componentDidMount(){
        const userdata =[]
        axios.get('http://13.55.8.94:5000/contributor/commentfromothers', {
          headers: {   
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          },
        })
        .then(res => {
          res.data.map(function(thumbup,id) {
            userdata.push({id,name:thumbup["explorer"]["username"],comment_time:thumbup["comment_time"],comment:thumbup["comment_detail"],image:thumbup["image"]["image_url"]})
          });
          console.log(userdata);
          this.setState({
            userData: userdata,
          });
        })
        .catch(err => {
          console.log(err)
        });
      }
    render(){ 
    return (
      <>
        <CRow alignHorizontal='center'>  
          <CCol xs="12" md="10">
            <CCard>
              <CCardHeader>
                All Comments from explorer
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={this.state.userData}
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
  }
  
  export default AllComments;