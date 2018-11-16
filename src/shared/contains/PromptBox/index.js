import React, { Component } from 'react';
import {NModal} from '../../base';
require('./index.less');
export default class PromptBox extends Component {
   constructor(props) {
        super(props);
        this.state = {

        }
   }

   render() {
       return (
           <NModal></NModal>
       )
   }
}