import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as HR} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store';

ReactDOM.render(
    <Provider store={store}>
<HR>
    <App />
</HR>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
