import React from 'react'
import Axios from 'axios'
import { CRow } from  '@coreui/react'
import ImageCard from '../../resueable/ImageCard/ImageCard'


class ContributorPhotos extends React.Component {
  constructor(){
    super();
    this.state = {
      photoArr: [],
    }
  }

  componentDidMount(){
    Axios.get(`http://13.55.8.94:5000/contributor/image/${sessionStorage.getItem('userid')}`, {
      header: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({
        photoArr: res.data,
      });
    })
  }
  render(){
    return (
    <>
      <CRow>
        {this.state.photoArr.map((p) => <ImageCard key={p.image_id} imageinfo={p}/>)}
      </CRow>
    </>
  )}
}

export default ContributorPhotos;
