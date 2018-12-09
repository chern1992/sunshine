import React, { Component } from 'react';
import {Layout} from 'antd';
require('./index.less');

export default class NLayout extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Layout {...this.props}/>
		);
	}
}
NLayout.NHeader = Layout.Header;
NLayout.NFooter = Layout.Footer;
NLayout.NSider = Layout.Sider;
NLayout.NContent = Layout.Content;

