import React from 'react';
import Axios from 'axios';

class AuthorDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authorid: props.match.params.id,
            username: '',
            usertype: ''
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
                usertype: res.data.userType
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        console.log(this.props)
        console.log(this.state.authorid);
        return (
            <>
                <h1>Hello! {this.state.username}</h1>
                <h4>You are: {this.state.usertype}</h4>
            </>
        );
    }
}

export default AuthorDetail;