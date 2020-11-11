import React, { useState,Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardImg,
  CButton,
  CInput,
} from  '@coreui/react'
// import styles from '../mainpage/ImageCard'
import styles from './Photos.module.css'
import Axios from 'axios'

class Photo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          checkoutList : []
        }
        }         
      // const comment = 'http://34.87.211.156:5000/image/comment/1604292601';
      // const stateChange =(e) =>{
      //   console.log(e.target.value);
      //   setState(e.target.value);
      // }

      // //判断哪些被选中了
      // const Checked =(e)=>{
      //   console.log(e.target.value);
      //   setChecked(e.target.value);
      // }

      // //click 后校验合格，传输imageID给后端
      // const checkoutClick = () =>{
      //   console.log(sessionStorage.getItem('token'));
      //   Axios.post() 
      
      // //点击remove button, 删除单笔订单信息
      // const removeHandler =() =>{

      // } 
    //   onclick = () => {
    //       props.addPhoto(name)
    //   }

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
                            <CButton color="primary" className="px-4" >Remove</CButton>
                          </CRow>
                        </CCol>
                      </CRow>
                    </CCardBody>

                  </CCard>
              </CCol>
        );
        }   
    }

  

export default Photo