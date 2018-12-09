import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { NMenu, NIcon, NLayout, NRow, NCol } from 'shared/base';
import { connect } from 'react-redux';
class MyHeader extends Component{

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NHeader));