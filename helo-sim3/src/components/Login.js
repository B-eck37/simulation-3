import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Auth0Lock from 'auth0-lock';
import {login} from '../ducks/reducer';
import {connect} from 'react-redux';

import './Login.css'

class Login extends Component {
  
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
