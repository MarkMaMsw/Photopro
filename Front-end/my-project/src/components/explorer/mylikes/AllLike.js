
import React from 'react'
import axios from 'axios'
import styles from './Alllikes.module.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'

  
  
class AllLike extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: [],
    }
  }
  
  componentDidMount(){
    const userdata =[]
    axios.get('http://13.55.8.94:5000/explorer/mylike', {
      headers: {   
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
    })
    .then(res => {
      res.data.map(function(thumbup,id) {
        userdata.push({id,Contributor:thumbup["image_detail"]["contributor_detail"]["username"],Like_time:thumbup["like_time"],image:thumbup["image_detail"]["image_url"]})
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
    const fields = ['Contributor', 'Like_time', 'image']
    return (
      <>
        <CRow alignHorizontal='center'>  
          <CCol xs="12" md='10'>
            <CCard>
              <CCardHeader>
                All My Likes
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

export default AllLike;