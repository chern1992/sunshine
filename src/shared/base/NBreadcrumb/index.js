import { Breadcrumb } from 'antd';
import React, { Component } from 'react';
class NBreadcrumb extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Breadcrumb {...this.props}/>   
        )
    }
}

export default NBreadcrumb;