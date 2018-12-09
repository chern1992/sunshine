import React, { Component } from 'react';
import {Menu} from 'antd';
require('./index.less');

export default class NMenu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Menu {...this.props}/>
		);
	}
}
NMenu.NSubMenu = Menu.SubMenu;
NMenu.NMenuItemGroup = Menu.MenuItemGroup;