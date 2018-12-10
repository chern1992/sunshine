import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { NMenu, NIcon, NLayout, NRow, NCol } from 'shared/base';
import { connect } from 'react-redux';
import ModuleMenu from './components/ModuleMenu';
import FullScreen from './components/FullScreen';
import SearchInput from './components/SearchInput';
import { updateModule } from 'store/reducers/layout';
import { callLogout } from 'services/login_api';

const { NHeader } = NLayout;
const NSubMenu = NMenu.NSubMenu;
const NMenuItemGroup = MMenu.NItemGroup;

require('./index.less');

class MyHeader extends Component{
  render() {
    return(
      <NHeader style={{ background: '#fff', padding: 0, height: 'auto', position: 'fixed', width: '100%', zIndex: 9 }}>
        <NRow type="flex" justify="start">
          <NCol xs={6} sm={6} md={2} lg={2} xl={1}>
            <ul className="top-nav" style={{ lineHeight: '65px', marginLeft: 10 }}>
              <li>
                <div className="item" onClick={this.props.toggle}>
                  <NIcon
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                  />
                </div>
              </li>
            </ul>
          </NCol>
          <NCol xs={18} sm={18} md={8} lg={6} xl={5}>
            <ModuleMenu
              style={{ lineHeight: '64px' }}
              moduleList={this.props.moduleList}
              updateModule={this.updateModule}
              currentModule={this.props.currentModule}
            />
          </NCol>
          <NCol xs={24} sm={12} md={5} lg={5} xl={9} style={{ textAlign: 'center' }}>
            <SearchInput style={{ display: 'inline-block', padding: '0px 20px', width: '100%' }} />
          </NCol>
          <NCol xs={8} sm={4} md={2} lg={1} xl={2} style={{ textAlign: 'right' }}>
            <ul className="top-nav" style={{ lineHeight: '65px' }}>
              <li>
                <a className="item" href="https://github.com" target={"_blank"}>
                  <NIcon type="github" />
                </a>
              </li>
            </ul>
          </NCol>
          <NCol xs={16} sm={8} md={7} lg={6} xl={7}>
            <NMenu
              mode="horizontal"
              style={{ lineHeight: '64px' }}
              onClick={this.menuClick}
            >
              <NMenu.NItem key="full">
                <FullScreen />
              </NMenu.NItem>
              {
                process.env.REACT_APP_LAYOUT_MODE !== 'tab' ?
                  <NMenu.NItem key="navTab">
                    <NIcon type={this.props.navTabshow ? 'arrow-up' : 'arrow-down'} style={{ fontSize: 16 }} />
                  </NMenu.NItem>
                :
                  null
              }
              <SubMenu title={<span className="avatar"><img src={this.props.avatar} alt="头像" /><i className="on bottom b-white" /></span>}>
                <NMenuItemGroup title="用户中心">
                  <NMenu.NItem key="setting:1">你好 - {this.props.name}</NMenu.NItem>
                  <NMenu.NItem key="setting:2"><NIcon type="user" />个人信息</NMenu.NItem>
                  <NMenu.NItem key="logout"><span onClick={this.logout}><NIcon type="logout" />退出登录</span></NMenu.NItem>
                </NMenuItemGroup>
              </SubMenu>
            </NMenu>
          </NCol>
        </NRow>
      </NHeader>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NHeader));