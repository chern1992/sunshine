import React, { Component } from 'react';
import {NModal, NButton} from '../../base';
require('./index.less');

const NHeader = NModal.Header;
const NBody = NModal.Body;
const NFooter = NModal.Footer;
export default class PromptBox extends Component {
   constructor(props) {
        super(props);
        this.state = {

        }
   }

   //title x图标的关闭
   closeBtnClick(){

   }
   //确定
   beSureClick() {

   }
   //取消
   cancelClick() {
       
   }

   render() {
       const {title, content, noFooter, noCancelButton} = this.props;
       let id = Date.now() + Math.random();
       return (
           <NModal
                show={true}
                onHide={this.closeBtnClick.bind(this)}
                className={`prompt-box ${id}`}
                backdrop={closeByClickBackDrop ? true :'static'}
                indexInfo={indexInfo}>
               <NHeader>
                   {title}
               </NHeader>
               <NBody>
                   {content}
               </NBody>
               {!noFooter && <NFooter>
                    <NButton 
						onClick={this.beSureClick}
						colors="primary"
					>
						{beSureBtnName}
					</NButton>
                    
                    {
                        !noCancelButton && <NButton
                            onClick={this.cancelClick}>
                                {cancelBtnName}
                        </NButton>
                    }
               </NFooter>}
           </NModal>
       )
   }
}