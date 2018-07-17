import React, { Component } from 'react';
import { Button } from 'tinper-bee';
// import './index.less';
import $NCPE from '../../pe/pe.js';

export function createButton(id, config = {}) {
	// console.log('页面调用了createButton方法，请使用createButtonApp方法重新创建按钮，后续createButton将删除');
	let { disabled = false, name = '', onButtonClick, buttonColor = '', ...others } = config;
	if (!this.state.button.hasOwnProperty(id)) {
		//初始化
		this.state.button[id] = { disabled };
		this.state.button[id] = Object.assign(this.state.button[id], config);
	}
	return (
		<Button
			disabled={this.state.button[id].disabled}
			onClick={() => {
				if (window.parent.proxyAction) {
					window.parent.proxyAction(onButtonClick, this, name)({ ...this.props, ...this.output }, id);
				} else {
					//onButtonClick.call(this, { ...this.props, ...this.output }, id)
					$NCPE.proxy(onButtonClick, this, name)({ ...this.props, ...this.output }, id);
				}
			}}
			{...others}
			color={buttonColor}
			id={id}
			className={`${!this.state.button[id].hasOwnProperty('visible') || this.state.button[id].visible
				? 'show'
				: 'hide'}  button-component ${buttonColor}`}
		>
			{name}
		</Button>
	);
}
