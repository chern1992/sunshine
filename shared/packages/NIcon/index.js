import { Icon } from 'antd';
import React, { Component } from 'react';
class NIcon extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Icon {...props}/>   
        )
    }
}

export default NIcon;