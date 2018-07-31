import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox, NHeader} from 'shared/packages/index';
import ReactDOM from 'react-dom';

import './index.less';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    loginInfoSubmit() {//确定提交登录信息
        
    }

    render() {
        return (
            <div className="login-bg-container">
                <section className="login-container">
                    <h2>登录</h2>
                    <NInput placeholder="Basic usage"/>
                </section>
            </div>
        )
    }
}

export default Login;


