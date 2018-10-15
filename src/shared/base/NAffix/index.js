import { Affix } from 'antd';
import React, { Component } from 'react';
class NAffix extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Affix {...this.props}/>   
        )
    }
}

export default NAffix;