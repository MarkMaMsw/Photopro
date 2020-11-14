
import React from 'react'
import Axios from 'axios'
import url from '../../../components/api/url'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import Photo from './Photos/Photos';
import Checkout from './Checkout/Checkout';


class Shoppingcart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                photoArr:[],
                image_list:[],
                checkoutList:[],
                totalPrice:0,
            }
        }

        arrayRemove = (array,value)=> {
          var index=0;
          for (index of array.keys()){
            console.log(index,value);
            if(array[index] === value){
              break;
            }
          }
          array.splice(index,1)
          return array
        }
  
        checkBox = (key,price) =>{
          var {checkoutList,totalPrice} = this.state;
          if (checkoutList.includes(key)){
            checkoutList = this.arrayRemove(checkoutList,key)
            totalPrice-=parseInt(price)
          }else{
            checkoutList.push(key)
            totalPrice+=parseInt(price)
          }
          this.setState({checkoutList:checkoutList,totalPrice:totalPrice})
        }

        updateArr = ()=>{
          Axios.get(`${url}/explorer/shoppingcart`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => {
                console.log(res.data);
                this.setState({
                    photoArr:res.data,
                });
            })
            .catch(err => console.log(err));
        }
         
        componentDidMount(){
            Axios.get(`${url}/explorer/shoppingcart`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => {
                console.log(res.data);
                this.setState({
                    photoArr:res.data,
                });
            })
            .catch(err => console.log(err));
        }
  render(){
  return (
    <>
    <CRow alignHorizontal='center'>  
      <CCol xs="12" md='10'>
        <CCard>
          <CCardHeader>
            My Shopping Cart
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs='6'>
                <CRow alignHorizontal='center'>
                  {this.state.photoArr.map(p => <Photo 
                  key={p.image_id} 
                  imageinfo={p}
                  checkBox={this.checkBox}
                  price={p.price}
                  updateArr={this.updateArr}
                  />)
                  }

                </CRow>
              </CCol>

              <CCol xs='6'>
              <Checkout
                checkoutList = {this.state.checkoutList}
                totalPrice = {this.state.totalPrice}
              />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>    
    </>
  )
}
}

export default Shoppingcart;