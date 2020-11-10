import React from 'react'
import styles from './author.module.css';
import {
  CHeader,
  CRow,
  CCol,
  CSubheader,
  CImg,
} from '@coreui/react'
import Axios from 'axios'
import ImageCard from '../../../components/resueable/ImageCard/ImageCard'


class AuthorContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authorid: props.history.match.params.id,
            username: '',
            email: '',
            portfolio: '',
            photoArr:[],
        }
    }

    componentDidMount(){
        Axios.get(`http://13.55.8.94:5000/user/${this.state.authorid}`, {
            header: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
        .then(res => {
            this.setState({
                username: res.data.username,
                email: res.data.email,
                description: res.data.description,
                portfolio: res.data.image_num,
            });
        })
        .catch(err => console.log(err));

        Axios.get(`http://13.55.8.94:5000/contributor/image/${this.state.authorid}`, {
            header: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          }
        })
        .then(res => {
            console.log(res);
            this.setState({
                photoArr: res.data,
            });
        })
    }



    render(){
        // console.log(this.state.authorid);
        return (
            <>
              <CHeader className={styles.author_cheader}>
                <div className={styles.sidebar_avatar}>
                <CImg
                  src={'avatars/9.jpg'}
                  className="c-avatar-img"
                  alt="avatars"
                />
                </div>
                <CRow alignVertical='start' className={styles.header_info}>
                  <CCol>
                    <h1>Username: {this.state.username}</h1>
                    <h1>Email: {this.state.email}</h1>
                    <h2>Description: {this.state.description} </h2>
                    <h2>Portfolio: {this.state.portfolio} </h2>
                  </CCol>
                </CRow>
              </CHeader>
              <CSubheader className={styles.subheader}>
                <div className={"d-md-down-none mfe-2 c-subheader-nav"}>
                  Portfolio
                </div>
              </CSubheader>
              <div>
                <CRow>
                  {this.state.photoArr.map(p => <ImageCard key={p.image_id} imageinfo={p}/>)}
                </CRow>
              </div>
            </>
        );
    }
}

  
export default AuthorContent