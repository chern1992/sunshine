import { Input } from 'antd';
import React, { Component } from 'react';
class NInput extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Input {...props}/>   
        )
    }
}

export default NInput;