import React, { useState } from 'react';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit"
import { Layout, Menu, Button,Drawer } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import {
    Link,
    useHistory
} from "react-router-dom";
import "./NavBar.css"

const { Header } = Layout;

function NavBar(props) {
    const [visible, setVisible] = useState(false);
    let history = useHistory()
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Header className="header" style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }}>
                    <style jsx="true">{`
                    .ant-btn:hover, .ant-btn:focus {
                        color: ${colorsState.colors.color3};
                        background: ${colorsState.colors.color1};
                        border-color: ${colorsState.colors.color2};
                    }
                    .ant-btn{
                        border-color: ${colorsState.colors.color1};
                    }
                    .ant-drawer-wrapper-body{
                        color: ${colorsState.colors.color3};
                        background: ${colorsState.colors.color1};
                        border-color: ${colorsState.colors.color2};
                    }
                    .ant-drawer-header{
                        color: ${colorsState.colors.color3} ;
                        background: ${colorsState.colors.color1};
                        border-color: ${colorsState.colors.color2};
                    }
                    .ant-drawer-title,.ant-drawer-close{
                        color: ${colorsState.colors.color3} ;
                        border-color: ${colorsState.colors.color2};
                    }
                    `}</style>
                    <div 
                    // className="nav-left-class"
                    >
                        <Button className="left-menu-class" onClick={() => { setVisible(!visible) }} icon={visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} style={{ backgroundColor: colorsState.colors.color1, color: "#fff" }} />
                        <img className="logo" alt="LOGO's" src={require("../../../../logo.svg")} width="50px" onClick={() => history.push("/")} />
                    </div>
                    <Drawer
                        title="Menu"
                        placement="left"
                        closable={true}
                        onClose={() => { setVisible(!visible) }}
                        visible={visible}
                    >
                        <Menu style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3,borderColor: colorsState.colors.color1 }} mode="vertical" defaultSelectedKeys={[props.keyVal]}>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="1"><Link style={{ color: colorsState.colors.color3 }} to="/">Home</Link></Menu.Item>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="2"><Link style={{ color: colorsState.colors.color3 }} to="/about">About</Link></Menu.Item>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="3"><Link style={{ color: colorsState.colors.color3 }} to="/services">Our Services</Link></Menu.Item>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="4"><Link style={{ color: colorsState.colors.color3 }} to="/blogs">Our Blog</Link></Menu.Item>
                            <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="5"><Link style={{ color: colorsState.colors.color3 }} to="/contact">Contact Us</Link></Menu.Item>
                        </Menu>
                    </Drawer>
                    {/* <div className="nav-right-class"
                    >
                        
                    </div> */}
                </Header>
            }
        </ThemeContext.Consumer>
    )
}

export default NavBar

