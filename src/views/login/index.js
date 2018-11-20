import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox, NHeader} from 'shared/base/index';
import ReactDOM from 'react-dom';
import Page from 'shared/Page';
import './index.less';

const NFormItem = NForm.NFormItem;

class Login extends Page{
    constructor(props) {
        super(props);
        // this.state = {
        //     // sum: 111
        // }
    }

    componentDidMount() {

    }

    loginInfoSubmit() {//确定提交登录信息
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className="login-bg-container">
                555
                {/* {this.modal.createModal('ddd')} */}
            </div>
        )
    }
}

const LoginForm = NForm.create()(Login);
export default LoginForm;


