import { Col } from 'antd';
import React, { Component } from 'react';
class NCol extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Col {...props}/>   
        )
    }
}

export default NCol;