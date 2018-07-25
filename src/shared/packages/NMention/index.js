import { Mention } from 'antd';
import React, { Component } from 'react';
class NMention extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Mention {...this.props}/>   
        )
    }
}

export default NMention;