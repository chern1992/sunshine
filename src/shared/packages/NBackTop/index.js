import { BackTop } from 'antd';
import React, { Component } from 'react';
class NBackTop extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <BackTop {...this.props}/>   
        )
    }
}

export default NBackTop;