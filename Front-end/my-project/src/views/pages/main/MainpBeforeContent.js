import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
  CContainer,
  CImg
} from '@coreui/react'
import ImageCard from '../../../components/resueable/ImageCard/ImageCard';
import styles from './MainpBefore.module.css'

class MainpBeforeContent extends React.Component {
  constructor(){
    super();
    this.state = {
      isloading: true,
      selectedArr: [],
      photoArr: [],
      authorArr: []
    }
  }

  componentDidMount(){
    Axios.get(`http://13.55.8.94:5000/index/image`)
    .then(res => {
      console.log(res.data);
      const newArr = res.data.filter( d => d.contributer_detail !== false );
      console.log(newArr);
      this.setState({
        selectedArr: newArr.slice(0, 6),
        photoArr: newArr.slice(6, 12),
      });
    })
    .catch(err => console.log(err));

    Axios.get(`http://13.55.8.94:5000/index/contributor`)
    .then(res => {
      console.log(res);
      const newArr = res.data.filter( d => d.userType === 'contributor' );
      console.log(newArr);
      this.setState({
        authorArr: newArr.slice(0, 6)
      });
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <main className="c-main">
        <CContainer fluid>
          {/* selected photo */}
          <CRow alignHorizontal='center'>
            <CCol xs="10">
              <CCard color="gradient-secondary">
                <CCardHeader className={styles.card_header}>
                  <h4 style={{textAlign: 'center'}}>Selected Photo</h4>
                </CCardHeader>
                <CCardBody>
                  <CCarousel animate autoSlide={3000}>
                    <CCarouselIndicators/>
                    <CCarouselInner className={styles.carousel}>
                      {this.state.selectedArr.map( (p, index) => {
                        return (
                          <CCarouselItem key={index}>
                            <CImg
                              src={p.image_url}
                              className="d-block w-100"
                              alt="avatars"
                            />
                            <CCarouselCaption><h3>{p.title}</h3><p>{p.title}</p></CCarouselCaption>
                          </CCarouselItem>
                        )
                      })}
                    </CCarouselInner>
                    <CCarouselControl direction="prev"/>
                    <CCarouselControl direction="next"/>
                  </CCarousel>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Photo Recommendation */}
          <CRow alignHorizontal='center'>
            <CCol xs="10">
              <CCard color="gradient-secondary">
                <CCardHeader className={styles.card_header}>
                  <h4 style={{textAlign: 'center'}}>Photo Recommendation</h4>
                </CCardHeader>
                
                <CCardBody>
                  <CRow>
                    {this.state.photoArr.map(p => <ImageCard key={p.image_id} imageinfo={p}/>)}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          
          {/* author Recommendation */}
          <CRow alignHorizontal='center'>
            <CCol xs="10">
              <CCard color="gradient-secondary">
                <CCardHeader className={styles.card_header}>
                  <h4 style={{textAlign: 'center'}}>Hot Author</h4>
                </CCardHeader>
                <CCardBody>
                  <CRow alignHorizontal='center'>
                    {this.state.authorArr.map((author, index) => {
                      return <AuthorCard key={index} author={author} imgsrc={`avatars/9.jpg`}/>
                    })}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </main>
    );
  }
}

// Hot Author Card
const AuthorCard = (props) => {
  const [path] = useState(`/authordetail/${props.author.id}`)
  return (
    <CCol className={styles.hot_author} xs='1'>
      <Link to={path} target='_blank'>
        <h5 className={styles.authorname}>{props.author.username}</h5>
        <CImg
          src={props.imgsrc}
          className="c-avatar-img"
          alt={props.author.username}
        />
      </Link>
    </CCol>
  );
}

export default MainpBeforeContent;
