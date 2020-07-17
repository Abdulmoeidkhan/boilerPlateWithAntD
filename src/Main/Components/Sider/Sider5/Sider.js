import React, { useState } from 'react';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit"
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import "./Sider.css"


const { Sider } = Layout;
const { SubMenu } = Menu;



function MySider(props) {
    // let history=useHistory() 
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout style={{ minHeight: '100vh' }} className="open-side-bar">
                    <Sider collapsible collapsed={false}
                        trigger={null}
                        style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }}    
                        >
                        <div className="logo"/>
                        {
                            <style jsx="true">
                            {`
                            .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before{
                                background: ${colorsState.colors.color3} !important;
                            }
                            .ant-menu-submenu > .ant-menu {
                                background-color:${colorsState.colors.color1} !important
                            }
                            .ant-menu-inline,.ant-menu-vertical{
                                border-right: 2px solid ${colorsState.colors.color1} !important
                            }
                            .ant-menu-inline .ant-menu-item::after{
                                border-right: 2px solid ${colorsState.colors.color2} !important
                            }
                            `}
                        </style>
                        }
                        <Menu style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="1" icon={<PieChartOutlined />}>
                                Option 1
                    </Menu.Item>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="2" icon={<DesktopOutlined />}>
                                Option 2
                    </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User" style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }}>
                                <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="3">Tom</Menu.Item>
                                <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="4">Bill</Menu.Item>
                                <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team" style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }}>
                                <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="6">Team 1</Menu.Item>
                                <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="9" icon={<FileOutlined />} />
                        </Menu>
                    </Sider>
                    {props.children}
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default MySider

