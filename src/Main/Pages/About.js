import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import  NavBar2 from "../Components/NavBar/NavBar2/NavBar"
import NavBar from "../Components/NavBar/NavBar1/NavBar";
import MyFooter from "../Components/Footer/Footer1/Footer.js";
import ColorSelector from "../Components/ColorSelector/colorSelector";
import MySider from "../Components/Sider/Sider2/Sider.js";
import Slider from "../Components/Slider/Slider2/Slider.js";
import MyCard from "../Components/Cards/Card2/Card"


const {Content} =Layout
const AboutUs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <MySider>
                <Layout className="site-layout">
                    <span  className="desktop-nav-class">
                    <NavBar keyVal="2"/>
                    </span>
                    <span  className="mobile-nav-class">
                    <NavBar2 keyVal="2"/>
                    </span>
                    <Content>
                        <h2>About Us</h2>
                        <Slider/>
                        <br/>
                        <MyCard/>
                        <br/>
                        <ColorSelector />
                    </Content>
                    <MyFooter />
                </Layout>
                </MySider>
            }
        </ThemeContext.Consumer>
    )
}

export default AboutUs