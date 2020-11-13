import React from 'react'
import axios from 'axios'
import url from '../../api/url'
import styles from './AllComment.module.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  

const fields = ['Contributor', 'Comment_time', 'Comment', 'image']

class AllComment extends React.Component {
    constructor(){
      super();
      this.state = {
        userData: [],
      }
    }
      
    componentDidMount(){
      const userdata =[]
      axios.get(`${url}/explorer/mycomment`, {
        headers: {   
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
      })
      .then(res => {
        console.log(res);
        res.data.forEach((thumbup,id) => {
          userdata.push({id,Contributor:thumbup["image_detail"]["contributor_detail"]["username"],Comment_time:thumbup["comment_time"],Comment:thumbup["comment_detail"],image:thumbup["image_detail"]["image_url"]})
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
              All My Comments
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

export default AllComment;