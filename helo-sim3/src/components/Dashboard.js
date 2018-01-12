import React, { Component } from 'react';
import Header  from './Header';
import '../components/Dash.css';
import {Link} from 'react-router-dom';
import state from '../ducks/reducer';


class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
        
        }
    }

    render() {
       
        return (
            <div className='dashboard'>
            <Header />
                <div className='top-content'>

                
                    <div className='dash-profile'>
                        <div className='left-side'>
                        <img src='https://robohash.org/me' alt='me' className='me'/>
                        </div>
                        <div className='right-side' >
                        <h4></h4>
                        <h4></h4>
                        <button className='button'><Link to='/profile' className='button'>Edit Profile</Link></button>
                        </div>
                    </div>
                    <div className="welcome">
                        <p>Welcome to Helo!</p>
                    </div>
                </div>
                <div className='recommended-outer'>
                    <div className='recommended-titles'>
                    <h2>Recommended Friends</h2>
                    <select className="select" onChange={event => (event.target.value)}>
                    <option value="Default">Select</option>
                    <option value="First Name">First Name</option>
                    <option value="Last Name">Last Name</option>
                    <option value="Hobby">Hobby</option>
                    </select>    
                    <div className="list">

                        {/* {this.state.user.map(elem => {
                            return (
                                <div className='users'>
                                    <h2>{elem.firstName}</h2>
                                    <h2>{elem.lastName}</h2>
                                </div>    
                            )
                        })} */}
                   
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }
}



export default Dashboard;
