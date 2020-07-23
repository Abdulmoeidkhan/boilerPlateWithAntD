import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import NavBar from "../Components/NavBar/NavBar1/NavBar";
import  NavBar2 from "../Components/NavBar/NavBar2/NavBar"
import MyFooter from "../Components/Footer/Footer1/Footer.js";
import ColorSelector  from "../Components/ColorSelector/colorSelector";
import Slider from "../Components/Slider/Slider1/Slider.js";
import MySider from "../Components/Sider/Sider5/Sider.js";
import MyCard from "../Components/Cards/Card5/Card"

const { Content, } = Layout;

const Services = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <MySider>
                <Layout className="site-layout">
                <span  className="desktop-nav-class">
                    <NavBar keyVal="3"/>
                    </span>
                    <span  className="mobile-nav-class">
                    <NavBar2 keyVal="3"/>
                    </span>
                    <Content>
                        <h2>Our Sevices</h2>
                        <ColorSelector />
                        <br/>
                        <Slider/>
                        <br/>
                        <MyCard/>
                        <br/>
                    </Content>
                    <MyFooter />
                </Layout>
                </MySider>
            }
        </ThemeContext.Consumer>
    )
}

export default Services