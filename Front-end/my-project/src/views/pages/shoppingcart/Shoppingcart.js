
import React from 'react'
import {
  CCol,
  CRow,
} from '@coreui/react'
import ShoppingcartHeader from './ShoppingcartHeader';
import ShoppingcartFooter from './ShoppingcartFooter';
import Photo from '../../../components/shoppingcart/Photos/Photos';
import Axios from 'axios'
import Checkout from '../../../components/shoppingcart/Checkout/Checkout';


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
          Axios.get(`http://13.55.8.94:5000/explorer/shoppingcart`, {
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
            Axios.get(`http://13.55.8.94:5000/explorer/shoppingcart`, {
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
    <div className='c-wrapper'>      
      {/* <ShoppingcartHeader/> */}
      <h1>Shopping Cart</h1>
      <div className="col">
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
      </div>
      {/* <ShoppingcartFooter/> */}
    </div>
    </>
  )
}
}

export default Shoppingcart;