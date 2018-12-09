import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox, NRow, NCol} from 'shared/base/index';
import ReactDOM from 'react-dom';
import './index.less';
import {callLoginByUserAndName} from 'services/login_api';
import Utils from 'shared/utils';
const NFormItem = NForm.NFormItem;

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordStatus: false,
            loginInputStatus: 'normal'//greeting,blindfold
        }
    }

    componentDidMount() {

    }

    loginInfoSubmit = async(values) => {//确定提交登录信息
        let res = await callLoginByUserAndName(values);
        if(res.data && res.data.accessToken) {
            //token存储
            Utils.setStorage('userToken', res.data.accessToken)
        }
    }

    //更改输入框状态
    changeFormType = (e) => {
        let loginInputStatus = null;
        switch (e.target.id){
            case 'username':
                loginInputStatus = 'greeting';
                break;
            case 'password':
                loginInputStatus = 'blindfold';
                break;
            default:
                loginInputStatus = 'normal';
                break;
        }
        this.setState({
            loginInputStatus
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.loginInfoSubmit(values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {loginInputStatus} = this.state;
        return (
            <div className="login-box-container">
                
                <div className="auth-modal-box">
                    <img className="auth-status-img"
                        src={require(`../../assets/images/login/${loginInputStatus}.png`)}/>
                    
                    <h2 className="auth-login-title">登录</h2>
                    <NForm onSubmit={this.handleSubmit} className="login-form">
                        <NFormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名！' }],
                            })(
                                <NInput 
                                    prefix={<NIcon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="用户名" 
                                    onFocus={this.changeFormType}/>
                            )}
                        </NFormItem>
                        <NFormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码！' }],
                            })(
                                <NInput 
                                    prefix={<NIcon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="password" 
                                    placeholder="密码"
                                    onFocus={this.changeFormType}/>
                            )}
                        </NFormItem>

                        <NFormItem>
                            <NRow>
                                <NCol span={12}>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <NCheckbox>记住密码</NCheckbox>
                                    )}
                                </NCol>
                                <NCol span={12} style={{textAlign: 'right'}}>
                                    <a className="login-form-forgot" 
                                        href={'javascript:void(0)'}>忘记密码</a>
                                </NCol>
                            </NRow>
                            
                            
                            <NButton type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </NButton>
                           
                            
                        </NFormItem>
                    </NForm>
                    
                    
                </div>
            </div>
        )
    }
}

const LoginForm = NForm.create()(Login);
export default LoginForm;


