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

NForm.NFormItem = Form.Item;
NForm.create = Form.create;
export default NForm;