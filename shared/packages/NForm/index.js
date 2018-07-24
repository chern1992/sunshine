import { Form } from 'antd';
import React, { Component } from 'react';
class NForm extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Form {...props}/>   
        )
    }
}
NForm.NFormItem = Form.FormItem;
export default NForm;