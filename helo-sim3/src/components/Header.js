import React, {Component} from 'react';
import '../components/Header.css';
import {Link} from 'react-router-dom';
import Search from './Search';

export default class Header extends Component {
    render(){
        return (
            <div className='header'>
                <div className='content'>
                    <h1>Helo</h1>
                    <Link to='/dashboard' className='links'>Dash</Link>
                    <Link to='/search' className='links'>Search</Link>
                    <Link to='/' className='links-logout'>Logout</Link>
                </div>

            </div>
        )
    }

}