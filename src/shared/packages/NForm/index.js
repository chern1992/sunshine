import { Form } from 'antd';
import React, { Component } from 'react';
class NForm extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Form {...this.props}/>   
        )
    }
}
NForm.NFormItem = Form.FormItem;
NForm.create = Form.create;
NForm.setFields = Form.setFields;
export default NForm;