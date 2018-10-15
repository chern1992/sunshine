import { Row } from 'antd';
import React, { Component } from 'react';
class NRow extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Row {...this.props}/>   
        )
    }
}

export default NRow;