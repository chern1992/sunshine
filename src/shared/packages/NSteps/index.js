import { Steps } from 'antd';
import React, { Component } from 'react';
class NSteps extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Steps {...this.props}/>   
        )
    }
}

NSteps.Nstep = Steps.Step;

export default NSteps;