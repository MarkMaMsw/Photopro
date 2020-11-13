import React from 'react'
import axios from 'axios'
import url from '../../api/url'
import styles from './AllPurchase.module.css'

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton
  } from '@coreui/react'
  
  
const fields = ['Contributor', 'Time', 'image', 'Price','Download']
  
  class AllPurchase extends React.Component{
    constructor(){
      super();
      this.state = {
        userData: [],
      }
    }
    
    componentDidMount(){
      const userdata =[]
      axios.get(`${url}/explorer/order`, {
        headers: {   
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
      })
      .then(res => {
        res.data.forEach((thumbup,id) => {
          userdata.push({id,Contributor:thumbup["image"]["contributor_detail"]["username"],Time:thumbup["time"],image:thumbup["image"]["image_no_watermark_url"], Price:thumbup["order_price"],Download:"download"})
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
                Purchased History
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
                    ),
                    'Download':
                    (item)=>(
                      <td>
                        <a href={item.image} download><CButton color='success'>Download</CButton></a>
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
  
export default AllPurchase;