import React, { Component } from 'react';
import Header from './Header';
import '../components/Search.css';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className='outer-box'>
                    <div className='inner-box'>
                        <select className='select'>
                            <option>First Name</option>
                            <option>Last Name</option>
                        </select>
                        <input></input>
                        <button>Search</button>
                        <button>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Search;
