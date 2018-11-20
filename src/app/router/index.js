import React, {Component, Fragment} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

// 组件
import Login from 'views/login';

//React Router 实现自定义的 history
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

class RouteMap extends Component {
    render() {
        return (
            <Router history = {history}>
                <Fragment>
                    <Route exact path="/" component={Login} />
                </Fragment>
            </Router>
        )
    }
}

export default RouteMap;



