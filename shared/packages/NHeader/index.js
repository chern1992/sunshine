import { Header } from 'antd';
import React, { Component } from 'react';
class NHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Header {...props}/>   
        )
    }
}

export default NHeader;