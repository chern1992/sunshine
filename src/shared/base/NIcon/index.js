import { Icon } from 'antd';
import React, { Component } from 'react';
require('./index.less');
class NIcon extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Icon {...this.props}/>   
        )
    }
}

export default NIcon;