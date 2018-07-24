import { Layout } from 'antd';
import React, { Component } from 'react';
const {Content} = Layout;
class NContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Content {...this.props}/>   
        )
    }
}

export default NContent;