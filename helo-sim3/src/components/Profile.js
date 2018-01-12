import React, { Component } from 'react'
import Header from './Header'
import '../components/Profile.css'
import firstname from './Dashboard';

class Profile extends Component {


    render() {
        return (
            <div>
                <Header />
                <div className='profile-content'>
                    <div className='profile-top'>
                
                    <img src='https://robohash.org/me' alt='me' className='me'/>
                    <div className='profile-buttons'>
                        <button>Update</button>
                        <button>Reset</button>
                    </div>

                    </div>
                    <div className='profile-bottom'>
                        <div>First Name:<br/><input placeholder='First Name' /></div>
                        <div>Last Name:<br/><input placeholder='First Name'/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
