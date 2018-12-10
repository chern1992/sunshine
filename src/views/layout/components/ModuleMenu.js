import React, {Component} from 'react';
import { NMenu } from 'shared/base';
const {NItem} = NMenu;

class ModuleMenu extends Component {
    render() {
        const list = [];
        for (let item of this.props.moduleList) {
            list.push(
                <NItem key={item.name}>
                    {item.title}
                </NItem>
            );
        }
        return (
            <NMenu
                onClick={this.props.updateModule}
                selectedKeys={[this.props.currentModule]}
                mode="horizontal"
                style={this.props.style}
            >
                {list}
            </NMenu>
        )
    }
}
export default ModuleMenu;
