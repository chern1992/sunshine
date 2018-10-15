import { InputNumber } from 'antd';
import React, { Component } from 'react';
class NInputNumber extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <InputNumber {...this.props}/>   
        )
    }
}

export default NInputNumber;