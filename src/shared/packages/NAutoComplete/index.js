import { AutoComplete } from 'antd';
import React, { Component } from 'react';
class NAutoComplete extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <AutoComplete {...this.props}/>   
        )
    }
}

export default NAutoComplete;