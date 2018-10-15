import { Pagination } from 'antd';
import React, { Component } from 'react';
class NPagination extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Pagination {...this.props}/>   
        )
    }
}

export default NPagination;