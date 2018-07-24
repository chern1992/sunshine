import { Content } from 'antd';
import React, { Component } from 'react';
class NContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Content {...props}/>   
        )
    }
}

export default NContent;