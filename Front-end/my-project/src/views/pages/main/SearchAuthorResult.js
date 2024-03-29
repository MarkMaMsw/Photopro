import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import url from '../../../components/api/url';
import { Link } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer
} from '@coreui/react'

import styles from './MainpBefore.module.css'

const SearchAuthorResult = (props) => {
    const [authorArr, setAuthorArr] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem('token')){
            Axios.get(`${url}/explorerInfo`, {
              headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
              }
            })
            .then(res => {
                const json = {
                    type: 'contributor',
                    keyword: props.keyword,
                    explorer_id: res.data.content.id
                };
                Axios.post(`${url}/search`, json)
                .then(res => {
                    console.log(res);
                    const newArr = res.data.result.filter( a => a.userType === 'contributor');
                    setAuthorArr(newArr);
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        } else {
            const json = {
                type: 'contributor',
                keyword: props.keyword,
                explorer_id: ""
            };
            Axios.post(`${url}/search`, json)
            .then(res => {
                console.log(res);
                const newArr = res.data.result.filter( a => a.userType === 'contributor');
                setAuthorArr(newArr);
            })
            .catch(err => console.log(err));
        }
    }, [props.keyword]);

    return (
        <CContainer fluid>
            <CRow alignHorizontal='center'>
                <CCol xs="12" md='10'>
                    <CCard>
                    <CCardHeader>
                        <h4 className={styles.searchtitle}>Search Type: Author</h4>
                        <h4>Keywords: <span className={styles.keyword}>{props.keyword}</span> </h4>
                        <h5>Result:</h5>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className={styles.firstrow}>
                            <CCol>Username</CCol>
                            <CCol>Description</CCol>
                            <CCol>Email</CCol>
                            <CCol>Number of Photos</CCol>
                        </CRow>
                        {authorArr.map((auth) => <AuthorCard author={auth} key={auth.id}/>)}
                    </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );

}

const AuthorCard = (props) => {
    const [path] = useState(`/authordetail/${props.author.id}`)
    return (
        <CRow className={styles.datarow}>
            <CCol>
                <Link to={path} target="_blank">{props.author.username}</Link>
            </CCol>
            <CCol>{props.author.description}</CCol>
            <CCol>{props.author.email}</CCol>
            <CCol>{props.author.image_num}</CCol>
        </CRow>
    );
}

export default SearchAuthorResult;