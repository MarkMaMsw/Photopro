import React from 'react';
import Axios from 'axios';
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
import { DocsLink } from 'src/reusable'
import ImageCard from '../../../components/resueable/ImageCard/ImageCard';

import styles from './MainpBefore.module.css'

class MainpBeforeContent extends React.Component {
  constructor(){
    super();
    this.state = {
      isloading: true,
      photoArr: [],
    }
  }

  componentDidMount(){
    Axios.get(`http://13.55.8.94:5000/index/image`)
    .then(res => {
      console.log(res.data);
      const newArr = res.data.filter( d => d.contributer_detail !== false );
      console.log(newArr);
      this.setState({
        photoArr: newArr.slice(0, 6),
      });
    });
  }

  render(){
    return (
      <main className="c-main">
        <CContainer fluid>
          <CRow alignHorizontal='center'>
            <CCol xs="10">
              <CCard>
                <CCardHeader>
                  <h5 style={{textAlign: 'center'}}>Selected Photo</h5>
                </CCardHeader>
                <CCardBody>
                  <CCarousel animate autoSlide={3000}>
                    <CCarouselIndicators/>
                    <CCarouselInner>
                      {this.state.photoArr.map( p => {
                        return (
                          <CCarouselItem>
                            {/* <img className="d-block w-100" src={p.image_url} alt="slide 2"/> */}
                            {/* <img className="d-block w-100" src='LoginBcakground.jpg' alt="slide 2"/> */}
                            <CImg
                              src={'avatars/004.jpg'}
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

          {/* <h5 style={{textAlign: 'center'}}>Photo Recommendation</h5> */}
          <CRow alignHorizontal='center'>
            <CCol xs="10">
              <CCard>
                <CCardHeader>
                Photo Recommendation
                </CCardHeader>
                
                <CCardBody>
                  <CRow>
                    {this.state.photoArr.map(p => <ImageCard key={p.image_id} imageinfo={p}/>)}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          
          <CRow alignHorizontal='center'>
            <CCol xs="10">
              <CCard>
                <CCardHeader>
                  Hot Author
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol className={styles.hot_author} xs='2'>
                      <CImg
                        src={'avatars/9.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </CCol>
                    <CCol className={styles.hot_author} xs='2'>
                      <CImg
                        src={'avatars/9.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </CCol>
                    <CCol className={styles.hot_author} xs='2'>
                      <CImg
                        src={'avatars/9.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </CCol>
                    <CCol className={styles.hot_author} xs='2'>
                      <CImg
                        src={'avatars/9.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </CCol>
                    <CCol className={styles.hot_author} xs='2'>
                      <CImg
                        src={'avatars/9.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </CCol>
                    <CCol className={styles.hot_author} xs='2'>
                      <CImg
                        src={'avatars/9.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </CCol>
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

export default MainpBeforeContent;
