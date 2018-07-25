import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox, NHeader} from 'shared/packages/index';
import ReactDOM from 'react-dom';
import {Form} from 'antd';
const { NFormItem } = NForm;

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
        console.log(this.props)
        return (
            <Fragment>
                <NHeader>登录</NHeader>
            </Fragment>
        )
    }
}

export default Login;


