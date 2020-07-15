import React from 'react';
import { ThemeContext } from "../../../GlobalEnvironment/contextInit"
import { Layout, Menu } from 'antd';
import {
    Link,
    useHistory
} from "react-router-dom";
import "./NavBar.css"

const { Header } = Layout;

function NavBar(props) {
    let history=useHistory() 
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Header className="header" style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }}>
                    <div className="nav-left-class" >
                    <img className="logo" alt="LOGO's" src={require("../../../../logo.svg")} width="50px" onClick={()=>history.push("/")}/>
                    </div>
                    <div className="nav-right-class"
                    >
                    <Menu style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} mode="horizontal" defaultSelectedKeys={[props.keyVal]}>
                        <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="1"><Link style={{ color: colorsState.colors.color3 }} to="/">Home</Link></Menu.Item>
                        <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="2"><Link style={{ color: colorsState.colors.color3 }} to="/about">About</Link></Menu.Item>
                        <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="3"><Link style={{ color: colorsState.colors.color3 }} to="/services">Our Services</Link></Menu.Item>
                        <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="4"><Link style={{ color: colorsState.colors.color3 }} to="/blogs">Our Blog</Link></Menu.Item>
                        <Menu.Item style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color3 }} key="5"><Link style={{ color: colorsState.colors.color3 }} to="/contact">Contact Us</Link></Menu.Item>
                    </Menu>
                    </div>
                </Header>
            }
        </ThemeContext.Consumer>
    )
}

export default NavBar

