import React from 'react'
import Axios from 'axios'
import url from '../../api/url'
import { Link } from 'react-router-dom'
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
  CModalTitle,
  CSelect
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import styles from './ImageCard.module.css'

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            heartcolor: "",
            collectionColor:"",
            show: false,
            showCollection:false,
            showAddCollection:false,
            commentList: [],
            img_id : this.props.imageinfo.image_id,
            commentDetail:"",
            commentState:false,
            likeList:[],
            collectionList:[],
            collectionName:"",
            collectionDetail:"",
            sumLike: this.props.imageinfo.like_num,
            deleteSuccess: false,
            deleteFail: false,
            deleteCheck: false,
            addCartSuccess: false,
            addCartFail: false,
            addCartAlready: false,
            photoStatus: this.props.imageinfo.status,
        }
    }

    async componentDidMount(){
        const response1 = await Axios.get(`${url}/explorerInfo`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        const response2 = await Axios.get(`${url}/image/like/${this.props.imageinfo.image_id}`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        var likeArray = response2.data.map((d)=> d.explorer_name)
        this.setState({likeList:likeArray})
        var likeColor = likeArray.includes(response1.data.content.username)?"red":"black";
        this.setState({heartcolor: likeColor})
    }

    async componentDidUpdate (prevProps, prevState){
        if(prevState.heartcolor !== this.state.heartcolor){
            const response2 = await Axios.get(`${url}/image/detail/${this.props.imageinfo.image_id}`,{
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
            })
            this.setState({sumLike:response2.data.like_num})
        }
        if(this.state.commentState){
            const response1 = await Axios.get(`${url}/image/comment/${this.props.imageinfo.image_id}`,
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
        var body = {
            image_id: this.props.imageinfo.image_id,
            status: this.state.heartcolor==="black"?"active":"inactive"
        }
        await Axios.post(`${url}/image/like`, body, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(res=> {
            console.log(res.status)
        })
        
    }

    toggle = async ()=>{
        console.log("start modal")
        this.setState({show:!this.state.show})
        console.log(this.props.imageinfo.image_id)
        const response1 = await Axios.get(`${url}/image/comment/${this.props.imageinfo.image_id}`,
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

    toggleCollection = async ()=>{
        this.setState({showCollection:!this.state.showCollection})
        const response1 = await Axios.get(`${url}/image/collection`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        console.log(response1)
        this.setState({collectionList:response1.data})
    }

    addCart = async ()=>{
        const response1 = await Axios.get(`${url}/explorer/shoppingcart`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        console.log(response1)
        var imageList = response1.data
        if (imageList.filter((a)=>
            a.image_id === this.props.imageinfo.image_id
        ).length === 0){
            var body = {
                image_id: this.props.imageinfo.image_id,
            }
            await Axios.post(`${url}/explorer/shoppingcart`,body, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }).then(res=> {
                if (res.status === 200){
                    this.setState({addCartSuccess: !this.state.addCartSuccess});
                }
            })
            .catch(err => {
                this.setState({
                    addCartFail: !this.state.addCartFail,
                })
            });
        }else{
            this.setState({addCartAlready: !this.state.addCartAlready});
        }
        
    }

    

    inputComment= (e) =>{
        this.setState({img_id:e.target.name,commentDetail:e.target.value})
    }

    commentSubmit = (e)=>{
        console.log("send")
        if (this.state.commentDetail !== ""){
            var body={
                image_id: this.state.img_id,
                comment_detail: this.state.commentDetail
            }
            Axios.post(`${url}/image/comment`,body, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
            })
        }
        this.setState({commentState:true})
        e.preventDefault();

    }

    inputCollectionInfo = (e)=>{
        if(e.target.name === "name"){
            this.setState({collectionName:e.target.value})
        }else{
            this.setState({collectionDetail:e.target.value})
        }
    }

    createCollection = async (e)=>{
        e.preventDefault();
        var body = {
            name: this.state.collectionName,
            detail: this.state.collectionDetail
        }
        await Axios.post(`${url}/image/collection`,body, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(res=> console.log(res.status))
        this.setState({showAddCollection:false})
        const response2 = await Axios.get(`${url}/image/collection`,
        {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }})
        console.log(response2)
        this.setState({collectionList:response2.data})
        
    }

    addConfirm = async (e)=>{
        e.preventDefault()
        if (document.querySelector('input[name="collection"]:checked')==null){
            alert("pls select one option")
        }else{
            var selectedValue = document.querySelector('input[name="collection"]:checked').value;
            console.log(selectedValue)
            var target = this.state.collectionList.filter((a)=>a.collection_name === selectedValue)
            console.log(target)
            if (target[0].collection_images === [] || target[0].collection_images.filter((a)=>a.image_id === this.props.imageinfo.image_id).length === 0){
                var collList = target[0].collection_images.map((a)=>a.image_id)
                collList.push(this.props.imageinfo.image_id)
                var body={
                    id: target[0].id,
                    name: target[0].collection_name,
                    detail: target[0].collection_details,
                    images: collList
                }
                await Axios.put(`${url}/image/collection`,body, {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    }
                }).then(res=> console.log(res.status))
            }else{
                alert("This image has been added in this collection")
            }
            this.toggleCollection();    
        }
    }

    deletePhoto = (image_id) => {
        const json = {
            "image_id": image_id,
        }

        Axios.delete(`${url}/image`, { 
            data: json,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }})
            .then(res => {
                console.log(res.data);
                if (res.data.status === "delete success"){
                    this.setState({
                        deleteSuccess: !this.state.deleteSuccess,
                    });
                } 
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    deleteFail: !this.state.deleteFail,
                });
            });
    }

    changeStatus = (e) => {
        console.log(e.target.value);
        const newStatus = e.target.value;
        Axios.put(`${url}/image`, {
            "image_id": this.state.img_id,
            "image_status": newStatus
        }, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res);
            this.setState({
                photoStatus: newStatus
            })
        });
    }

    render(){
        const {image_id, contributor_detail, title, price, tag, image_no_watermark_url, image_url, comment_num} = this.props.imageinfo;
        const usertype = sessionStorage.getItem('usertype');
        const authorpath = `/authordetail/${contributor_detail.id}`;
        return (
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
                    {usertype === 'contributor' ? 
                        <CCardImg src={image_no_watermark_url} className={styles.card_image} onClick={this.toggle}></CCardImg> : 
                        <CCardImg src={image_url} className={styles.card_image} onClick={this.toggle}></CCardImg>}
                </div>
                <CCardFooter className={styles.card_footer}>
                    <CRow>
                        {usertype === 'contributor' ? 
                            <CButton type="reset" size="sm" color="danger" onClick={() => {this.setState({deleteCheck: !this.state.deleteCheck});}}><CIcon name="cil-trash" /> Delete</CButton> : 
                            <span>Author: <Link to={authorpath} target='_blank'>{contributor_detail.username}</Link></span>}
                        {usertype === 'contributor' && 
                            <CSelect custom name="photo-status" id="photo-status" value={this.state.photoStatus} onChange={this.changeStatus} className={styles.selectbox}>
                                <option value="on_shop">On Shop</option>
                                <option value="off_shop">Off Shop</option>
                            </CSelect>}
                    </CRow>
                    <span className={styles.price}>${price}</span>
                </CCardFooter>
            </CCard>

            <CModal show={this.state.show} onClose={this.toggle} size="xl">
                <CModalHeader closeButton>
                    <h3>Image Details</h3> 
                </CModalHeader>
                <CModalBody>
                    <div>
                        <CRow>
                            <CCol xs="12" md="8" className={styles.detail_photo_container}>
                                <CCardImg className={styles.detail_photo} src={image_url}/>
                            </CCol>
                            <CCol xs="12" md="4">
                                <article className="upperItem upperRight">
                                <header>
                                    <h3>Title: {title}</h3>
                                    <p>{`By ${contributor_detail["username"]} (${contributor_detail["email"]})`}</p>
                                    <p>Tags: {tag}</p>
                                    {sessionStorage.getItem('token') && <>
                                        <div className={styles.collect_like}>
                                            <CIcon size={'xl'} content={freeSet.cilPlaylistAdd} onClick={this.toggleCollection} className={styles.icon_click}/>  &nbsp;&nbsp;&nbsp;&nbsp;Add to collection
                                        </div>
                                        <div className={styles.collect_like}>
                                            <CIcon size={'xl'} content={freeSet.cilHeart} onClick={this.heartClick} style={{color: this.state.heartcolor}} className={styles.icon_click}/> {this.state.sumLike} &nbsp;&nbsp;&nbsp;Like it
                                        </div></>
                                    }
                                </header><br/>
                                <detail>
                                    <h5 className={styles.photo_price}>{`Price: $${price}`}</h5>
                                    {sessionStorage.getItem('token') && 
                                        <CButton onClick={this.addCart} color="success"><CIcon content={freeSet.cilCart} />{" "}Add To Cart</CButton>
                                    }
                                </detail>
                            </article>
                            </CCol>
                        </CRow>
                    </div>
                    <CRow alignHorizontal='center'>
                        {sessionStorage.getItem('token') && 
                            <form>
                                <label htmlFor="comment">comment</label>&nbsp;&nbsp;
                                <input 
                                    type="text"
                                    id="comment"
                                    name={image_id}
                                    placeholder="Leave your comment"
                                    size="120"
                                    onChange={this.inputComment}
                                /> &nbsp; &nbsp;
                                <button type="submit" color="primary" onClick={this.commentSubmit}>submit</button>
                            </form>
                        }
                    </CRow>
                    <h5 style={{textAlign: 'center'}}>Comment List</h5>
                    <CRow alignHorizontal='center'>
                        <CCol xs="9">
                            {this.state.commentList.map((d,index)=><CommentCard key={index} data={d}/>)}
                        </CCol>
                    </CRow>
                </CModalBody>
            </CModal>

            <CModal show={this.state.showCollection} onClose={this.toggleCollection}>
                <CModalHeader closeButton>Add to collection</CModalHeader>
                <CModalBody>
                    <CIcon className="iconItem" size={'xl'} content={freeSet.cilPlus} onClick={()=>this.setState({showAddCollection:!this.state.showAddCollection})}/>{" New collection"}
                    <div style={this.state.showAddCollection?{"display":"block"}:{"display":"none"}}>
                        <form >
                            <h5>Create collection</h5>
                            <label htmlFor="name">name</label>{" "}
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="input collection name"
                                size="30"
                                onChange={this.inputCollectionInfo}
                            /><br/>
                            <label htmlFor="detail">detail</label>{" "}
                            <input 
                                type="text"
                                id="detail"
                                name="detail"
                                placeholder="input collection detail"
                                size="30"
                                onChange={this.inputCollectionInfo}
                            /><br/>
                            <button type="submit" onClick={this.createCollection}>submit</button>
                        </form>
                    </div>
                    <br/>
                    <p>
                        <h5>choose one of them</h5>
                    </p>
                    <form>
                        {this.state.collectionList.map((d,index)=>
                        <span>
                            <input type="radio" id={d.collection_name} name="collection" value={d.collection_name} required/>
                            <label for={d.collection_name}>{d.collection_name} (<i>{d.collection_details}</i>)</label><br></br>
                        </span>)} 
                        <button type="submit" onClick={this.addConfirm}>Confirm</button>
                    </form>
                </CModalBody>
            </CModal>

            {/* Shaowei Add some modal below */}
            <CModal 
            show={this.state.deleteCheck} 
            onClose={() => this.setState({deleteCheck: !this.state.deleteCheck})}
            color="warning"
            >
                <CModalHeader closeButton>
                <CModalTitle>Delete</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Do you want to delete this photo?
                </CModalBody>
                <CModalFooter>
                <CButton type="reset" size="sm" color="danger" 
                    onClick={() => {
                        this.deletePhoto(image_id);
                        this.setState({deleteCheck: !this.state.deleteCheck});
                        }}><CIcon name="cil-trash" /> Delete</CButton>
                <CButton color="secondary" onClick={() => {
                    this.setState({deleteCheck: !this.state.deleteCheck});
                    }}>Cancel</CButton>
                </CModalFooter>
            </CModal>

            <CModal 
            show={this.state.deleteSuccess} 
            onClose={() => this.setState({deleteSuccess: !this.state.deleteSuccess})}
            color="success"
            >
                <CModalHeader closeButton>
                <CModalTitle>Success</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Your Photo is Deleted.
                </CModalBody>
                <CModalFooter>
                <CButton color="success" onClick={() => {
                    this.setState({deleteSuccess: !this.state.deleteSuccess});
                    window.location.reload();
                    }}>OK</CButton>
                </CModalFooter>
            </CModal>

            <CModal 
            show={this.state.deleteFail} 
            onClose={() => this.setState({deleteFail: !this.state.deleteFail})}
            color="warning"
            >
                <CModalHeader closeButton>
                <CModalTitle>Fail</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Cannot delete now.
                </CModalBody>
                <CModalFooter>
                <CButton color="warning" onClick={() => {
                    this.setState({deleteFail: !this.state.deleteFail});
                    }}>Try Later</CButton>
                </CModalFooter>
            </CModal>

            <CModal 
            show={this.state.addCartSuccess} 
            onClose={() => this.setState({addCartSuccess: !this.state.addCartSuccess})}
            color="success"
            >
                <CModalHeader closeButton>
                <CModalTitle>Success</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Successfully add to shopping cart
                </CModalBody>
                <CModalFooter>
                <CButton color="success" onClick={() => {
                    this.setState({addCartSuccess: !this.state.addCartSuccess});
                    }}>OK</CButton>
                </CModalFooter>
            </CModal>
        
            <CModal 
            show={this.state.addCartFail} 
            onClose={() => this.setState({addCartFail: !this.state.addCartFail})}
            color="warning"
            >
                <CModalHeader closeButton>
                <CModalTitle>Fail</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Cannot add to cart.
                </CModalBody>
                <CModalFooter>
                <CButton color="warning" onClick={() => {
                    this.setState({addCartFail: !this.state.addCartFail});
                    }}>Try Later</CButton>
                </CModalFooter>
            </CModal>

            <CModal 
            show={this.state.addCartAlready} 
            onClose={() => this.setState({addCartAlready: !this.state.addCartAlready})}
            color="warning"
            >
                <CModalHeader closeButton>
                <CModalTitle>Conflict</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    This photo is already in shopping cart.
                </CModalBody>
                <CModalFooter>
                <CButton color="warning" onClick={() => {
                    this.setState({addCartAlready: !this.state.addCartAlready});
                    }}>OK</CButton>
                </CModalFooter>
            </CModal>

        </CCol>
        );
    }
}

const CommentCard = (props) => {
    return (
        <CRow alignHorizontal='center' className={styles.comment}>
            <CCol xs='2'>{props.data.explorer_name}</CCol>
            <CCol xs='7'>{props.data.comment_detail}</CCol>
            <CCol xs='3'>{props.data.comment_time}</CCol>
        </CRow>
    );
}

export default ImageCard;