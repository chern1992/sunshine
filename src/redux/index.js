import React, {Component} from 'react';

import {Provider} from 'react-redux';//引入父层组件
import App from '@/App';

import createStore from './store/configureStore';

class Redux extends Component {
    render() {
        return (
            <Provider store = {store}>
                <App/>
            </Provider>
        )
    }
}

export default Redux;

