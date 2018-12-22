import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NBreadcrumb, NIcon } from 'shared/base';
import MenuToRouter from '@/menuMapToRouter';
import {getParentMenusByName} from './method';

const NBreadcrumbItem = NBreadcrumb.NItem;

class MyBreadcrumb extends React.PureComponent {
    state = {
        map: [{
            name: "home",
            title: "首页",
            icon: "home",
            path: "/app/home"
        }]
    }
    componentWillReceiveProps(nextProps) {
        let newMap = [
            {
                name: "home",
                title: "首页",
                icon: "home",
                path: "/app/home"
            }
        ];
        let name = Object.keys(MenuToRouter).find(key => MenuToRouter[key] === nextProps.location.pathname);
        if (name) {
            let parents = getParentMenusByName(this.props.openAccessMenu, name);
            for (let p of parents) {
                newMap.push({
                    title: p.title,
                    name: p.name
                });
            }
            this.setState({
                map: newMap
            })
        }

    }
    render() {
        console.log("MyBreadcrumb render")
        return (
            <NBreadcrumb style={this.props.style}>
                {this.state.map.map(
                    item =>
                        <NBreadcrumbItem key={item.name}>
                            {item.path ?
                                <Link to={item.path}><NIcon type={item.icon} /><span>{item.title}</span></Link>
                                :
                                <span>{item.title}</span>}
                        </NBreadcrumbItem>
                )}
            </NBreadcrumb>

        );
    }
}
const mapStateToProps = state => {
    return {
        openAccessMenu: state.app.openAccessMenu
    }
}
export default withRouter(connect(mapStateToProps)(MyBreadcrumb));
