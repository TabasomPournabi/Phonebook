import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CheckSearchBar from './components/CheckSearchBar';
ReactDOM.render(
    <BrowserRouter>
    <App/>
   
    </BrowserRouter>
,
 document.getElementById('root'));
// ReactDOM.render(<SearchBar />, document.getElementById('root'));
