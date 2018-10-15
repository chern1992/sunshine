import { Table } from 'antd';
import React, { Component } from 'react';
class NSteps extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Table {...this.props}/>   
        )
    }
}

export default NSteps;