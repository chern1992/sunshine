import { Input } from 'antd';
import React, { Component } from 'react';
class NInput extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Input {...this.props}/>   
        )
    }
}

NInput.NSearch = Input.Search;
NInput.NInputGroup = Input.InputGroup; 

export default NInput;