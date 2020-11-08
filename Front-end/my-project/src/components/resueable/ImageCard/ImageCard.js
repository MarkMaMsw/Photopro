import React from 'react'
import Axios from 'axios'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
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
import "./modalImage.scss"

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            heartcolor: "",
            collectionColor:"",
            show: false,
            commentList: [],
            img_id : "",
            commentDetail:"",
            commentState:false,
            likeList:[],
            sumLike: this.props.imageinfo.like_num
        }
    }

    async componentDidMount(){
        const response1 = await Axios.get(`http://13.55.8.94:5000/explorerInfo`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        const response2 = await Axios.get(`http://13.55.8.94:5000/image/like/${this.props.imageinfo.image_id}`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        var likeArray = response2.data.map((d)=> d.explorer_name)
        this.setState({likeList:likeArray})
        var likeColor = likeArray.includes(JSON.parse(response1.data.content).username)?"red":"black";
        this.setState({heartcolor: likeColor})
        // console.log(likeArray)
        // console.log(likeColor)
        // console.log(JSON.parse(response1.data.content).username)
        // var [username,email] = JSON.parse(response1.data.content)
        // console.log(username,email)
    }

    async componentDidUpdate (prevProps, prevState){
        if(prevState.heartcolor != this.state.heartcolor){
            const response2 = await Axios.get(`http://13.55.8.94:5000/image/detail/${this.props.imageinfo.image_id}`,{
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
            })
            // console.log(response2.data.like_num)
            this.setState({sumLike:response2.data.like_num})
        }
        if(this.state.commentState){
            const response1 = await Axios.get(`http://13.55.8.94:5000/image/comment/${this.props.imageinfo.image_id}`,
            {headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }})
            response1.data.sort(function(a,b){
                var c = new Date(a.comment_time);
                var d = new Date(b.comment_time);
                return d-c;
            })
            this.setState({commentList:response1.data})
            this.setState({commentState:false})
        }
    }

    heartClick = async () => {
        if (this.state.heartcolor === 'black'){
            this.setState({heartcolor: 'red'});
        } else {
            this.setState({heartcolor: 'black'});
        }
        // console.log(this.state.heartcolor)
        var body = {
            image_id: this.props.imageinfo.image_id,
            status: this.state.heartcolor==="black"?"active":"inactive"
        }
        const response1 = await Axios.post('http://13.55.8.94:5000/image/like',body, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(res=> console.log(res.status))
        
    }

    toggle = async ()=>{
        console.log("start modal")
        this.setState({show:!this.state.show})
        console.log(this.props.imageinfo.image_id)
        const response1 = await Axios.get(`http://13.55.8.94:5000/image/comment/${this.props.imageinfo.image_id}`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        response1.data.sort(function(a,b){
            var c = new Date(a.comment_time);
            var d = new Date(b.comment_time);
            return d-c;
        })
        this.setState({commentList:response1.data})
        
    }

    addCart = async ()=>{
        const response1 = await Axios.get('http://13.55.8.94:5000/explorer/shoppingcart', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        console.log(response1)
        // var body = {
        //     image_id: this.props.imageinfo.image_id,
        // }
        // const response2 = await Axios.post('http://13.55.8.94:5000/explorer/shoppingcart',body, {
        //     headers: {
        //         'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        //     }
        // }).then(res=> console.log(res.status))
    }

    inputComment= (e) =>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({img_id:e.target.name,commentDetail:e.target.value})
    }

    commentSubmit = (e)=>{
        console.log("send")
        if (this.state.commentDetail != ""){
            var body={
                image_id: this.state.img_id,
                comment_detail: this.state.commentDetail
            }
            Axios.post('http://13.55.8.94:5000/image/comment',body, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
            })
        }
        this.setState({commentState:true})
        e.preventDefault();

    }

    render(){
        const {image_id,contributor_detail, title, price, tag, image_url, like_num, comment_num} = this.props.imageinfo;
        // this.setState({img_id:image_id})
        return (
            // <CRow>
                <CCol xs="12" md="6" lg="4">
                    
                    <CCard>
                        <CCardHeader className={styles.card_header}>
                            <h5>Title: {title}</h5>
                            <div>
                                <CIcon size={'xl'} content={freeSet.cilCommentSquare}  onClick={()=>console.log('clicked')}/> {comment_num} &nbsp;
                                <CIcon size={'xl'} content={freeSet.cilHeart} onClick={this.heartClick} style={{color: this.state.heartcolor}} className={styles.icon_click}/> {this.state.sumLike} 
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            Tags: {tag}
                        </CCardBody>
                        <div className={styles.image_container}>
                            <CCardImg src={image_url} className={styles.card_image} onClick={this.toggle}></CCardImg>
                        </div>
                        <CCardFooter className={styles.card_footer}>
                            <span>Author: {contributor_detail.username}</span>
                            <span className={styles.price}>${price}</span>
                        </CCardFooter>
                    </CCard>
                    <CModal
                        show={this.state.show}
                        onClose={this.toggle}
                        size="xl"
                    >
                        <CModalHeader closeButton>
                            <h3>Image Details</h3> 
                        </CModalHeader>
                        <CModalBody>
                            <div className="upperContainer">
                                <img className="upperItem" src={image_url}/>
                                <article className="upperItem upperRight">
                                    <header>
                                        <h3>{title}</h3>
                                        {`By ${contributor_detail["username"]} (${contributor_detail["email"]})`}<br/>
                                        Tags: {tag}
                                        <div>
                                            <CIcon className="iconItem" size={'xl'} content={freeSet.cilPlaylistAdd}  onClick={()=>console.log('clicked')}/> &nbsp;
                                            <CIcon className="iconItem" size={'xl'} content={freeSet.cilHeart} onClick={this.heartClick} style={{color: this.state.heartcolor}} className={styles.icon_click}/> {this.state.sumLike} 
                                        </div>
                                    </header><br/>
                                    <detail>
                                        {`Price: $${price}`}<br/>
                                        <button onClick={this.addCart}><CIcon content={freeSet.cilCart} />{" "}Add To Cart</button>
                                    </detail>
                                </article>
                            </div>
                            <div className="middleContainer">
                                <form>
                                    <label htmlFor="comment">comment</label>&nbsp;&nbsp;
                                    <input 
                                        type="text"
                                        id="comment"
                                        name={image_id}
                                        placeholder="input your comment"
                                        size="120"
                                        onChange={this.inputComment}
                                    /> &nbsp; &nbsp;
                                    <button type="submit" onClick={this.commentSubmit}>submit</button>
                                </form>      
                            </div>
                            <div className="lowerContainer">
                                <h5>Comment List</h5>
                                <ul>
                                    {this.state.commentList.map((d,index)=><li key={index}>{d.explorer_name}: {d.comment_detail}  -{d.comment_time}`</li>)}
                                </ul>
                            </div>
                        </CModalBody>
                        {/* <CModalFooter>
                        <CButton color="primary">Do Something</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={this.toggle}
                        >Cancel</CButton>
                        </CModalFooter> */}
                    </CModal>
                </CCol>
            // </CRow>
        );
    }
}

export default ImageCard;