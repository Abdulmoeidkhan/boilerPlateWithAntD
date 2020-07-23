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
// import {
//     Link,
//     useHistory
// } from "react-router-dom";
import "./Sider.css"


const { Sider } = Layout;
const { SubMenu } = Menu;

const MyTriger = (props) => (
    <ThemeContext.Consumer>
        {colorsState =>
            !props.collapsed
                ?
                <div className="ant-layout-sider-trigger" style={{ backgroundColor: colorsState.colors.color2, color: colorsState.colors.color2, width: "200px" }}>
                    <span role="img" aria-label="right" className="anticon anticon-right" style={{ backgroundColor: colorsState.colors.color2, color: colorsState.colors.color3 }}>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                            </path>
                        </svg>
                    </span>
                </div>
                :
                <div className="ant-layout-sider-trigger" style={{ backgroundColor: colorsState.colors.color2, color: colorsState.colors.color2, width: "80px" }}>
                    <span role="img" aria-label="left" className="anticon anticon-left" style={{ backgroundColor: colorsState.colors.color2, color: colorsState.colors.color3 }}>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                            </path>
                        </svg>
                    </span>
                </div>
        }
    </ThemeContext.Consumer>
)

function MySider(props) {
    // let history=useHistory() 
    let [collapsed, setCollapsed] = useState(true)
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout style={{ minHeight: '100vh' }} >
                    {props.children}
                    <Sider collapsible collapsed={collapsed}
                        className="sider-visible-class"
                        trigger={<MyTriger collapsed={collapsed} />}
                        onCollapse={() => setCollapsed(!collapsed)} style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }}>
                        <div className="logo" />
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
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default MySider

