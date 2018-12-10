import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { NMenu, NIcon, NLayout, NRow, NCol } from 'shared/base';
import { connect } from 'react-redux';
import ModuleMenu from './components/ModuleMenu';
import FullScreen from './components/FullScreen';
import SearchInput from './components/SearchInput';
import { updateModule } from 'store/reducers/layout';
import { callLogout } from 'services/login_api';

require('./index.less');

class MyHeader extends Component{

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NHeader));