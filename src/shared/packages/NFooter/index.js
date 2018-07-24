import { Layout } from 'antd';
import React, { Component } from 'react';
const {Footer} = Layout;
class NFooter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Footer {...this.props}/>   
        )
    }
}

export default NFooter;