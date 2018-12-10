import React from 'react';
import { NMenu, NIcon } from 'antd';
import { Link } from 'react-router-dom';
import MenuToRouter from '@/menuMapToRouter';

const { NSubMenu, NItem } = NMenu;

const renderMenuItem =
    ({ name, title, icon }) => {
        let link = MenuToRouter[name];
        return <NItem
            key={name}
        >
            {link ? <Link to={link}><span>{icon && <Icon type={icon} style={{ color: '#08c' }} />}<span>{title}</span></span></Link> : <span>{icon && <Icon type={icon} style={{ color: '#08c' }} />}<span>{title}</span></span>}
        </NItem>;
    }

const renderSubMenu =
    ({ name, title, icon, children }) =>
        <NSubMenu
            key={name}
            title={
                <span>
                    {icon && <NIcon type={icon} style={{ color: '#08c' }} />}
                    <span>{title}</span>
                </span>
            }

        >
            {children && children.map(
                item => item.children && item.children.filter(s => s.leftMemu).length > 0 ?
                    renderSubMenu(item) : renderMenuItem(item)
            )}
        </NSubMenu>;

export default ({ menus, ...props }) => <NMenu {...props}>
    {menus && menus.map(
        item => item.children && item.children.length ?
            renderSubMenu(item) : renderMenuItem(item)
    )}
</NMenu>;