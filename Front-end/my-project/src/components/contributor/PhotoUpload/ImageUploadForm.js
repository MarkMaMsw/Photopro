import React, { useState } from 'react'
import Axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CInputFile,
  CLabel,
  CRow,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
  CInputGroupAppend,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import styles from './ImageUploadForm.module.css'

const ImageUploadForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('on shop');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);

  const titleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  const priceChange = (e) => {
    console.log(e.target.value);
    setPrice(e.target.value);
  }

  const statusChange = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  }

  const tagOnchange = (e) => {
    console.log(e.target.value);
    setCurrentTag(e.target.value);
  }

  const addTags = () => {
    const newtags = [...tags];
    newtags.push(currentTag);
    setTags(newtags);
    setCurrentTag('');
  }

  const fileOnchange = (e) => {
    setFile(e.target.files[0]);
    readURL(e.target.files[0]);
  }

  const readURL = (input) => {
    const reader = new FileReader();
    reader.onload = e => {
      setUrl(e.target.result);
    }
    reader.readAsDataURL(input);
  }

  const submitClick = () => {
    console.log(title, price, status, tags, file);
    const formData = new FormData();

    formData.append('file', file);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('tag', tags.join(','));

    console.log(sessionStorage.getItem('token'));

    Axios.post('http://34.87.211.156:5000/image', formData, {
      headers: {
        "Content-type": "multipart/form-data",
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    .then(res=>{
      console.log(res);
      setSuccess(!success);
      resetClick();
    })
    .catch(err=>{
      console.log(err);
      setWarning(!warning);
    })

  }

  const resetClick = () => {
    setTitle('');
    setPrice('');
    setStatus('');
    setTags([]);
    setCurrentTag('');
    setFile('');
    setUrl('');
  }

  return <>
      <CRow alignHorizontal='center'>
        <CCol xs="12" md="10">
          <CCard>
            <CCardHeader>
              Contributor Image Upload
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="photo-title">Photo Title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="photo-title" name="photo-title" placeholder="Photo Title" value={title} onChange={e => titleChange(e)}/>
                    <CFormText>Enter a title for your photo</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="photo-price">Photo Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputGroup className="input-prepend">
                      <CInputGroupPrepend>
                        <CInputGroupText>$</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="photo-price" name="photo-price" type="number" value={price} onChange={e => priceChange(e)}/>
                    </CInputGroup>
                    <CFormText>Set price for your photo</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="photo-status">Photo Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="photo-status" id="photo-status" value={status} onChange={e => statusChange(e)}>
                      <option value="">Please select</option>
                      <option value="on_shop">On Shop</option>
                      <option value="off_shop">Off Shop</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Photo Tags</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInputGroup className="input-prepend">
                      <CInput id="photo-tags" name="photo-tags" type="text" value={currentTag} onChange={e => tagOnchange(e)}/>
                      <CInputGroupAppend>
                          <CButton color="success" onClick={addTags}>+Add</CButton>
                      </CInputGroupAppend>
                    </CInputGroup>
                    <CFormText>{tags.join(', ')}</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">File Upload</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input" onChange={e => fileOnchange(e)}/>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Photo</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CCard>
                      <CCardBody>
                        {url && <img src={url} alt="dogs" className="uploadImage" className={styles.uploadImage}></img>}
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CFormGroup>
              </CForm>


              {/* a notice card which will show if register successfully */}
              <CModal 
                show={success} 
                onClose={() => setSuccess(!success)}
                color="success"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Successful Upload</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  Congratulations!! Your photo has been successfully uploaded!
                </CModalBody>
                <CModalFooter>
                  <CButton color="success" onClick={() => setSuccess(!success)}>OK</CButton>
                </CModalFooter>
              </CModal>

              {/* a notice card which will show if register unsuccessfully */}
              <CModal 
              show={warning} 
              onClose={() => setWarning(!warning)}
              color="warning"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Fail Upload</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  Fail to upload photo, please try again.
                </CModalBody>
                <CModalFooter>
                  <CButton color="warning" onClick={() => setWarning(!warning)}>Try again</CButton>
                  <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
                </CModalFooter>
              </CModal>

            </CCardBody>
            <CCardFooter>
              <CRow className="justify-content-end">
                <CButton type="submit" size="sm" color="primary" onClick={submitClick}><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger" onClick={resetClick}><CIcon name="cil-ban" /> Reset</CButton>
              </CRow>
            </CCardFooter>
          </CCard>
          
        </CCol>
      </CRow>
    </>
}

export default ImageUploadForm;