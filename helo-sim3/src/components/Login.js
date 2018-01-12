import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Auth0Lock from 'auth0-lock';
import {login} from '../ducks/reducer';
import {connect} from 'react-redux';

import './Login.css'

class Login extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         user: null,
    //         secureDataResponse: null
    //     }
    //     // this.login = this.login.bind(this);
    //     this.lock = null;
    // }

    // componentDidMount(){
    //     this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)
    //     this.lock.on('authenticated', this.onAuthenticated)
    //     axios.get('/api/auth/logout').then(response => {
    //       this.setState({user: response.data});
    //     })
    //   }

    //   login(){
    //       this.lock.show();
    //   }
  
    render() {
        console.log(this.props)
        return (
            <div className='login'>
                <div className='helo'>
                    <h1 className='title'>Helo</h1>
                    {/* Username:<input className='input'></input><br/> */}
                    <Link to='/dashboard' className='login-button' onClick={this.props.login} >Login/Register</Link>
                </div>
               
            </div>
        )
    }
}

const mapDispatchToProps = {
        login: login
}



export default connect(null, mapDispatchToProps)(Login);
