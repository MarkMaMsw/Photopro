import React from 'react'
import url from '../../api/url'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardImg,
  CButton,
  CInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from  '@coreui/react'
import styles from './Photos.module.css'
import Axios from 'axios'

class Photo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          checkoutList : [],
          warning:false
        }
        }         

    warningChange= ()=>{
      this.setState({warning:!this.state.warning})
      console.log(this.state.warning);
    }

    removeItem = async ()=>{
      
      var body = {
        image_id: this.props.imageinfo.image_id
      }
      await Axios.delete(`${url}/explorer/shoppingcart`, {
      data:body,    
      headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
      }).then(res=> {this.props.updateArr()})
        .catch(error => {
          console.log(error.response.status)
        });
    }

      checkB = (e)=>{
        this.props.checkBox(this.props.imageinfo.image_id,this.props.imageinfo.price)
      }
      

      render(){
        const {image_id,contributor_detail, title, price, tag, image_url} = this.props.imageinfo;
        
      return (
           <CCol xs="8">
                  <CCard>
                    <CCardHeader className={styles.card_header}>      
                      <CRow>  
                        <CCol xs='2'> <CInput name = {image_id}  type="checkbox" onClick={this.checkB}></CInput></CCol>
                        <CCol xs='5'><h6>Title:{title}</h6></CCol>       
                        {/* <CCol xs='5'><CButton >checkout</CButton></CCol>              */}
                      </CRow>          
                    </CCardHeader>
                    <CCardBody>
                      <CRow>  
                        <CCol xs='8'>
                          <CRow>
                            <CCol xs='6'>
                              <CRow alignHorizontal='center'>
                                <CCardImg src={image_url} className={styles.card_image}></CCardImg>
                              </CRow>
                            </CCol>
                            <CCol xs='6'>
                              <CRow alignHorizontal='center'>
                                    <h6>Tags:{tag}</h6>
                                    
                              </CRow>    
                              <CRow alignHorizontal='center'>
                                <h6>Contributor:{contributor_detail.username}</h6>   
                              </CRow>                    
                            </CCol>
                            
                          </CRow>
                        </CCol>
                          
                        <CCol xs='4' className={styles.bar}>
                          <CRow alignHorizontal='center'>
                                <h4>Price:{price}</h4>
                          </CRow>

                          <CRow alignHorizontal='center' className={styles.side_height}>
                            <CButton color="primary" className="px-4" onClick={this.warningChange}>Remove</CButton>
                          </CRow>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                  <CModal 
                  show={this.state.warning} 
                  onClose={() => this.warningChange}
                  color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Remove Confirm</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      Are you sure to remove this item?
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="warning" onClick={() => {this.warningChange();this.removeItem(); }}>Of Course</CButton>
                      <CButton color="secondary" onClick={() => this.warningChange()}>Cancel</CButton>
                    </CModalFooter>
                  </CModal>
              </CCol>
                                    
        );
        }   
    }

  

export default Photo