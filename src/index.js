import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
require('./index.css');

ReactDOM.render(<Provider>
    <BrowserRouter>
        <Route path="/" component={App}></Route>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
