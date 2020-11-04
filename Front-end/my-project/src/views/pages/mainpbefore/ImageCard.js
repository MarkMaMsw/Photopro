import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCardImg,

} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import styles from './ImageCard.module.css'

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            heartcolor: 'black',
        }
    }

    heartClick = () => {
        if (this.state.heartcolor === 'black'){
            this.setState({heartcolor: 'red'});
        } else {
            this.setState({heartcolor: 'black'});
        }
    }

    render(){
        const {contributor_detail, title, price, tag, image_url, like_num, comment_num} = this.props.imageinfo;
        return (
            <CCol xs="12" md="6" lg="4">
                <CCard>
                    <CCardHeader className={styles.card_header}>
                        <h5>Title: {title}</h5>
                        <div>
                            <CIcon size={'xl'} content={freeSet.cilCommentSquare}  onClick={()=>console.log('clicked')}/> {comment_num} &nbsp;
                            <CIcon size={'xl'} content={freeSet.cilHeart} onClick={this.heartClick} style={{color: this.state.heartcolor}} className={styles.icon_click}/> {like_num} 
                        </div>
                    </CCardHeader>
                    <CCardBody>
                        Tags: {tag}
                    </CCardBody>
                    <div className={styles.image_container}>
                        <CCardImg src={image_url} className={styles.card_image}></CCardImg>
                    </div>
                    <CCardFooter className={styles.card_footer}>
                        <span>Author: {contributor_detail.username}</span>
                        <span className={styles.price}>${price}</span>
                    </CCardFooter>
                </CCard>
            </CCol>
        );
    }
}

export default ImageCard;