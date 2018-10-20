import React, { Component } from 'react';
import { NModal, NButton } from '../../base';
require('./createModal.less');

const NHeader = NModal.Header;
const NTitle = NModal.Title;
const NBody = NModal.Body;
const NFooter = NModal.Footer;

export default function createModal(
    id,
    {
        title,//标题
        content,//内容 
        beSureBtnClick,//确定按钮事件回调
        cancelBtnClick,//取消按钮事件回调
        closeModalEve,//关闭按钮事件回调
        leftBtnName = '确定',//左侧按钮名称
        rightBtnName = '取消',//右侧按钮名称
        noFooter = false,//是否需要底部按钮
        size = 'lg',//模态框大小 sm/lg/xlg
        userControl = false,//点确定、取消后，是否自动关闭弹出框
        className = '',
        backdropClassName = '',
        zIndex = 200,
        hasBackDrop = true,//显示遮罩层
        closeByClickBackDrop = false////点击遮罩关闭提示框
    } = {}
){
    let argusObj = {
		title,
		content,
		beSureBtnClick,
		cancelBtnClick,
		closeModalEve,
		leftBtnName,
		rightBtnName,
		noFooter,
		size,
		className,
		update: false, // show方法中是否有content，若有，以show中的content为主；若无，更新createModal中的content
		userControl,
		backdropClassName,
		hasBackDrop,
		closeByClickBackDrop,
		mark: 'create'
    };

    console.log('this', this)

    if(this.state.modal && this.state.modal[id] && this.state.modal[id].showModal === true) {
        if(this.state.modal[id].mark === 'create') {
            this.state.modal[id] = Object.assign(this.state.modal[id], argusObj);
        }else if(this.state.modal[id].mark === 'show') {
            this.state.modal[id] = Object.assign(argusObj,this.state.modal[id]);
        }
    }else {
        if(!this.state.modal.hasOwnProperty('id')) {
            this.state.modal[id] = argusObj;
        }
    }

    let modalData = this.state.modal[id];
    if(!modalData.update) {
        modalData.content = content;
    }
    /**点击关闭按钮**/
    const onHide = () => {
        close();
        if(typeof modalData.closeModalEve === 'function') {
            modalData.closeModalEve();
        }
    }

    //关闭模态框
    const close = () => {
        modalData.showModal = false;
        this.setState((prevState) => ({
            modal: prevState.modal
        }))
    }

    /**取消按钮事件**/
    const cancelClick = () => {
        if(!modalData.userControl) {
            close();
        }
        if(typeof modalData.cancelBtnClick === 'function') {
            modalData.cancelBtnClick();
        }
    }

    //确认按钮事件
    const beSureClick = () => {
        if(!modalData.userControl) {
            close();
        }
        if (typeof modalData.beSureBtnClick === 'function') {
			modalData.beSureBtnClick();
		}
    }

    let backdrop;
    if(hasBackDrop) {
        if(closeByClickBackDrop) {
            backdrop = closeByClickBackDrop;
        }else {
            backdrop = 'static';
        }
    }else {
        backdrop = hasBackDrop;
    }

    return (
        <NModal
            show={modalData.showModal}
            onHide={onHide.bind(this)}
            size={modalData.size}
            backdrop={backdrop}
            className={`${modalData.className} ${id} simpleModal`}
            backdropClassName={modalData.backdropClassName}
            zIndex={zIndex}>
            <NHeader closeButton>
                <NTitle>{modalData.title}</NTitle>
            </NHeader>
            <NBody>{modalData.content}</NBody>
            {!modalData.noFooter ? <NFooter>
                {this.state.modal[id].leftBtnName && (
                    <NButton onClick={beSureBtnClick.bind(this)} color="primary">
                        {modalData.leftBtnName}
                    </NButton>
                )}

                {this.state.modal[id].rightBtnName && (
                    <NButton onClick={cancelBtnClick.bind(this)} shape="border">
                        {modalData.rightBtnName}
                    </NButton>
                )}
            </NFooter> : null}
        </NModal>
    )    
}