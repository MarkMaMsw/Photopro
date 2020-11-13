import React from 'react'
import axios from 'axios'
import url from '../../api/url'
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
      constructor(){
        super();
        this.state = {
          userData: [],
        }
      }
       
      componentDidMount(){
        const userdata =[]
        axios.get(`${url}/contributor/commentfromothers`, {
          headers: {   
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          },
        })
        .then(res => {
          res.data.forEach((thumbup, id) => {
            userdata.push({id, name:thumbup["explorer"]["username"], comment_time:thumbup["comment_time"], comment:thumbup["comment_detail"], image:thumbup["image"]["image_url"]});
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
    )}
  }
  
  export default AllComments;