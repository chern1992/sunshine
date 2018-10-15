import { Cascader } from 'antd';
import React, { Component } from 'react';
class NCascader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Cascader {...this.props}/>   
        )
    }
}

export default NCascader;