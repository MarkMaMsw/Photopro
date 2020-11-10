import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCarousel,
//   CCarouselCaption,
//   CCarouselControl,
//   CCarouselIndicators,
//   CCarouselInner,
//   CCarouselItem,
//   CCol,
//   CRow,
//   CContainer,
//   CImg
// } from '@coreui/react'
// import ImageCard from '../../../components/resueable/ImageCard/ImageCard';
// import styles from './MainpBefore.module.css'

const SearchPhotoResult = (props) => {
    const [imageArr, setImageArr] = useState([]);

    useEffect(() => {
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
    }, [props.keyword]);

    return (<>
        <h1>SearchPhotoResult</h1>
        <h1>{props.keyword}</h1>
        {imageArr.map(img => <img src={img.image_url}/>)}</>
    );

}

export default SearchPhotoResult;