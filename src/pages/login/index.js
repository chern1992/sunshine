import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox, NHeader} from 'shared/packages/index';
import ReactDOM from 'react-dom';
import {Form} from 'antd';
import './index.less';

const NFormItem = NForm.NFormItem;

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
                <section className="login-container">
                    <h2>登录</h2>
                    <NForm onSubmit={this.handleSubmit.bind(this)}>
                        <NFormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <NInput prefix={<NIcon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </NFormItem>
                        <NFormItem>
                        <NButton type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </NButton>
                        </NFormItem>
                    </NForm>
                    <NInput placeholder="Basic usage"/>
                </section>
            </div>
        )
    }
}

const LoginForm = NForm.create()(Login);
export default LoginForm;


