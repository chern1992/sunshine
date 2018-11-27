import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox} from 'shared/base/index';
import ReactDOM from 'react-dom';
import './index.less';

const NFormItem = NForm.NFormItem;

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
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
            <div className="login-box-container">
                <img src={require("../../assets/images/login/normal.png")}/>
                <div className="auth-modal-box">
                    <h2>登录</h2>
                    <NForm onSubmit={this.handleSubmit} className="login-form">
                        <NFormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <NInput prefix={<NIcon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </NFormItem>
                        <NFormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <NInput prefix={<NIcon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </NFormItem>

                        <NFormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <NCheckbox>记住密码</NCheckbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <NButton type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </NButton>
                            Or <a href="">注册</a>
                        </NFormItem>
                    </NForm>
                    
                    
                </div>
            </div>
        )
    }
}

const LoginForm = NForm.create()(Login);
export default LoginForm;


