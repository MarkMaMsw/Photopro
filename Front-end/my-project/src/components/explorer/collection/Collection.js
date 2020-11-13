import React, { useState, useEffect } from 'react';
import url from '../../api/url';
import Axios from 'axios';
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader
} from '@coreui/react';
import ImageCard from '../../resueable/ImageCard/ImageCard'
import styles from './Collection.module.css'

const Tabs = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    Axios.get(`${url}/image/collection`, {
        headers: {   
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
    })
    .then(res => {
        console.log(res);
        setCollections(res.data);
    });
  }, []);


  return (
    <CRow alignHorizontal='center'>
      <CCol xs="10" className="mb-4">
        <CCard>
          <CCardHeader>
            My Collections
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                  {collections.map((c, index) => {
                      return (
                        <CNavItem key={index}>
                            <CNavLink>
                                {c.collection_name}
                            </CNavLink>
                        </CNavItem>
                      );
                  })}
              </CNav>

              <CTabContent>
                  {collections.map((c, index) => {
                      return(
                        <CTabPane key={index}>
                            <CollectionContainer images={c.collection_images}/>
                        </CTabPane>
                      );
                  })}
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const CollectionContainer = (props) => {
    const filterArr = props.images.filter(img => img.image_id);
    return(
        <CRow className={styles.collection_body}>
            {filterArr.map((img, index) => {
                return(
                    <ImageCard key={index} imageinfo={img}/>
                );
            })}
        </CRow>
    );
}

export default Tabs
