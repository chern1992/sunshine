import React, { Component, Fragment } from 'react';
import {NForm, NButton, NIcon, NInput, NCheckbox} from 'shared/packages/index';
const { NFormItem } = NForm;

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    loginInfoSubmit() {//确定提交登录信息

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
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
                        <NCheckbox>Remember me</NCheckbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <NButton type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </NButton>
                    Or <a href="">register now!</a>
                    </NFormItem>
                </NForm>
            </Fragment>
        )
    }
}

const WrappedNormalLoginForm = NForm.create()(Login);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
export default Login;


