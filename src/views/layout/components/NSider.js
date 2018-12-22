import React from 'react';
import { NLayout } from 'shared/base';
import SiderMenu from './SiderMenu';
import logo from '@/logo.svg';

const { NSider } = NLayout;

class NFSider extends Componet {
  render() {
    return (
      <NSider
        breakpoint="lg"
        collapsedWidth={this.props.responsive ? 0 : undefined}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        style={{ background: '#fff' }}
      >
      <div className="logo" style={{ paddingLeft: this.props.collapsed ? '14px' : '6px' }}><img src={logo} alt="" /><h3>3YAdmin</h3></div>
      <SiderMenu
        menus={this.props.menus}
        mode="inline"
        // onClick={this.props.menuClick}
        onOpenChange={this.props.openMenu}
        selectedKeys={[this.props.selectedKey]}
        openKeys={this.props.openKeys}
      />
      </NSider>
    )
  }
}

export default NFSider;