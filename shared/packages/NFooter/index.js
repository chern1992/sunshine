import { Footer } from 'antd';
import React, { Component } from 'react';
class NFooter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Footer {...props}/>   
        )
    }
}

export default NFooter;