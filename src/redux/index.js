import React, {Component} from 'react';

import {Provider} from 'react-redux';//引入父层组件
import App from '@/App';

import createStore from './store/configureStore';
const store=createStore();//引入redux数据

class Redux extends Component {
    render() {
        return (
            <Provider store = {createStore}>
                <App/>
            </Provider>
        )
    }
}

export default Redux;

