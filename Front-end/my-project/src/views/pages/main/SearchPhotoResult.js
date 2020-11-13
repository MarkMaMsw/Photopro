import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer
} from '@coreui/react'
import ImageCard from '../../../components/resueable/ImageCard/ImageCard';
import styles from './MainpBefore.module.css'

const SearchPhotoResult = (props) => {
    const [imageArr, setImageArr] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem('token')){
            Axios.get('http://13.55.8.94:5000/explorerInfo', {
              headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
              }
            })
            .then(res => {
                const json = {
                    type: 'image',
                    keyword: props.keyword,
                    explorer_id: res.data.content.id
                };
                Axios.post('http://13.55.8.94:5000/search', json)
                .then(res => {
                    console.log(res);
                    setImageArr(res.data.result);
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        } else {
            const json = {
                type: 'image',
                keyword: props.keyword,
                explorer_id: ""
            };
            Axios.post('http://13.55.8.94:5000/search', json)
            .then(res => {
                console.log(res);
                setImageArr(res.data.result);
            })
            .catch(err => console.log(err));
        }
    }, [props.keyword]);

    return (
        <CContainer fluid>
            <CRow alignHorizontal='center'>
                <CCol xs="10">
                <CCard>
                    <CCardHeader>
                        <h4 className={styles.searchtitle}>Search Type: Photo</h4>
                        <h4>Keywords: <span className={styles.keyword}>{props.keyword}</span> </h4>
                        <h5>Result:</h5>
                    </CCardHeader>

                    <CCardBody>
                    <CRow>
                        {imageArr.map((p) => <ImageCard key={p.image_id} imageinfo={p}/>)}
                    </CRow>
                    </CCardBody>
                </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );

}

export default SearchPhotoResult;