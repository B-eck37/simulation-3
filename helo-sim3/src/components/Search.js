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

                <section id='inner-box'>
                    <button>Search</button>
                </section>
                </div>
            </div>
        )
    }
}


export default Search;
