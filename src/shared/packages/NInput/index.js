import { Input } from 'antd';
import React, { Component } from 'react';
class NInput extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Input {...this.props}/>   
        )
    }
}

export default NInput;