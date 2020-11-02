import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCardImg,

} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import styles from './ImageCard.module.css'

const ImageCard = (props) => {
    // const {title, tags, url, contributor, price} = props.obj;
    const [heartcolor, setHeartstyle] = useState('black')

    const heartClick = () => {
        if (heartcolor === 'black'){
            setHeartstyle('red');
        } else {
            setHeartstyle('black');
        }
    }

    const imageurl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*';
    return (
        <CRow>
            <CCol xs="12" sm="6" md="4">
                <CCard>
                    <CCardHeader className={styles.card_header}>
                        Photo Title/Name
                        <div>
                            <CIcon size={'xl'} content={freeSet.cilCommentSquare}  onClick={()=>console.log('clicked')}/> 10 &nbsp;
                            <CIcon size={'xl'} content={freeSet.cilHeart} onClick={heartClick} style={{color: heartcolor}} className={styles.icon_click}/> 10 
                        </div>
                    </CCardHeader>
                    <CCardBody>
                        Photo tag1, Photo tag2, Photo tag3
                    </CCardBody>
                    <CCardImg src={imageurl} className={styles.card_image}></CCardImg>
                    <CCardFooter className={styles.card_footer}>
                        <span>Contributor</span>
                        <span className={styles.price}>$12</span>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default ImageCard;