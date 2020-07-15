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
                <Header className="header" style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}>
                    <div className="nav-left-class" >
                    <img className="logo" alt="LOGO's" src={require("../../../../logo.svg")} width="50px" onClick={()=>history.push("/")}/>
                    </div>
                    <div className="nav-right-class"
                    >
                    <Menu style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }} mode="horizontal" defaultSelectedKeys={[props.keyVal]}>
                        <Menu.Item key="1"><Link style={{ color: colorsState.colors.color2 }} to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link style={{ color: colorsState.colors.color2 }} to="/about">About</Link></Menu.Item>
                        <Menu.Item key="3"><Link style={{ color: colorsState.colors.color2 }} to="/services">Our Services</Link></Menu.Item>
                        <Menu.Item key="4"><Link style={{ color: colorsState.colors.color2 }} to="/blogs">Our Blog</Link></Menu.Item>
                        <Menu.Item key="5"><Link style={{ color: colorsState.colors.color2 }} to="/contact">Contact Us</Link></Menu.Item>
                    </Menu>
                    </div>
                </Header>
            }
        </ThemeContext.Consumer>
    )
}

export default NavBar

