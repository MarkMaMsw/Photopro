import React from 'react'
import Axios from 'axios'
import url from '../../api/url'
import styles from '../AllComments/AllComments.module.css'

import {
    CDataTable,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow
} from '@coreui/react'

const fields = [
  { key: 'Title', _style: { width: '20%'} },
  { key: 'image', _style: { width: '50%'}, filter:false},
  { key: 'Tag', _style: { width: '15%'} },
  { key: 'Like', _style: { width: '5%' }, filter:false},
  { key: 'Comment', _style: { width: '5%' }, filter:false },
  { key: 'Purchase', _style: { width: '5%' }, filter:false }
]

class Statistic extends React.Component {
    constructor(){
        super();
        this.state = {
          photoArr: [],
        }
      }

  componentDidMount(){
    const userdata=[]
    Axios.get(`${url}/contributor/image/${sessionStorage.getItem('userid')}`, {
      header: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      }
    })
    .then(res => {
        console.log(res.data);
        res.data.forEach((thumbup,id) => {
          userdata.push({id, Title:thumbup["title"], image:thumbup["image_url"], Tag:thumbup["tag"] ,Like:thumbup["like_num"], Comment:thumbup["comment_num"], Purchase:thumbup["buy_num"]})
        });
        this.setState({
          photoArr: userdata,
        });
      })
      .catch(err => {
        console.log(err)
      });
    }

render(){
  return (
    <CRow alignHorizontal='center'>  
      <CCol xs="12" md="10">
        <CCard>
          <CCardHeader>
            Statistic
          </CCardHeader>
          <CCardBody>
            <CDataTable
            items={this.state.photoArr}
            fields={fields}
            columnFilter
            tableFilter
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots = {{
              'image':
              (item)=>(
                <td>
                  <img src={item.image} alt="" className={styles.commentImage}></img>
                </td>
              ),
            }}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
 }
} 

export default Statistic;