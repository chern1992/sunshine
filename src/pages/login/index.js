import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox, NHeader} from 'shared/packages/index';
import ReactDOM from 'react-dom';
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
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                111
                {/* <NHeader>登录</NHeader>
                <NForm onSubmit={this.loginInfoSubmit.bind(this)} className="login-form">
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
                            <NCheckbox>保存</NCheckbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <NButton type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </NButton>
                        <a className="login-form-forgot" href="">注册</a>
                    </NFormItem>
                </NForm> */}
            </Fragment>
        )
    }
}

const WrappedNormalLoginForm = NForm.create()(Login);

ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));
export default Login;


