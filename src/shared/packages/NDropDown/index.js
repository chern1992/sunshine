import { Dropdown } from 'antd';
import React, { Component } from 'react';
class NDropdown extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Dropdown {...this.props}/>   
        )
    }
}

export default NDropdown;