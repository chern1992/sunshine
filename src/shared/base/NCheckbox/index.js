import { Checkbox } from 'antd';
import React, { Component } from 'react';
class NCheckbox extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Checkbox {...this.props}/>   
        )
    }
}

export default NCheckbox;