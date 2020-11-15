import React from 'react'
import styles from './author.module.css';
import url from '../../../components/api/url'
import {
  CRow,
  CCol,
  CImg,
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
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
            authorAvatar: '',
            photoArr:[],
        }
    }

    componentDidMount(){
        Axios.get(`${url}/user/${this.state.authorid}`, {
            header: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
        .then(res => {
            console.log(res);
            this.setState({
                username: res.data.username,
                email: res.data.email,
                description: res.data.description,
                portfolio: res.data.image_num,
                authorAvatar: res.data.photoURL,
            });
        })
        .catch(err => console.log(err));

        Axios.get(`${url}/contributor/image/${this.state.authorid}`, {
            header: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          }
        })
        .then(res => {
            console.log(res);
            this.setState({
                photoArr: res.data.filter((b)=>b.status==="on_shop"),
            });
        })
    }



    render(){
        return (
          <main className="c-main">
            <CContainer fluid>
              <CRow alignHorizontal='center'>
                <CCol xs="12">
                  <CCard>
                    <CCardHeader>
                      <CRow alignHorizontal='center' >
                        <CCol xs='4' md='2'>
                          <CImg
                          src={this.state.authorAvatar}
                          className="c-avatar-img"
                          alt="avatars"/>
                        </CCol>
                        <CCol xs='10' md='4' className={styles.info_container}>
                          <div>
                              <h1>Username: {this.state.username}</h1>
                              <h4>Email: {this.state.email}</h4>
                              <h4>Description: {this.state.description} </h4>
                              <h4>Number of Photos: {this.state.portfolio} </h4>
                          </div>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CRow>
                        {this.state.photoArr.map(p => <ImageCard key={p.image_id} imageinfo={p}/>)}
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </main>
        );
    }
}

  
export default AuthorContent