import React, { Component } from 'react';
import {Modal} from 'antd';
require('./index.less');

export default class NModal extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { className, backdropStyle,zIndex, ...others } = this.props;
		return (
			<Modal
				enforceFocus={false}
				className={`nc-modal ${className}`}
				backdropStyle={{ zIndex: zIndex||'200', ...backdropStyle }}
				{...others}
			/>
		);
	}
}
NModal.Header = Modal.Header;
NModal.Title = Modal.Title;
NModal.Body = Modal.Body;
NModal.Footer = Modal.Footer;