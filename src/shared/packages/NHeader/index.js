import { Layout } from 'antd';
import React, { Component } from 'react';
const {Header} = Layout;
class NHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Header {...this.props}/>   
        )
    }
}

export default NHeader;