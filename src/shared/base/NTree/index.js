import { TreeSelect } from 'antd';
import React, { Component } from 'react';
class NTree extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <TreeSelect {...this.props}/>   
        )
    }
}

export default NTree;