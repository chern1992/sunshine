import React, { Component } from 'react';

import { createModal, show, hide} from './CreateModal';

export default class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: {}
        }
        //简单提示模态框组件
        this.modal = {
            createModal,
            show,
            hide
        }
    }

    render(){
        return(
            <div></div>
        )
    }
}







