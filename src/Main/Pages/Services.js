import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import NavBar from "../Components/NavBar/NavBar1/NavBar";
import MyFooter from "../Components/Footer/Footer1/Footer.js";
import ColorSelector  from "../Components/ColorSelector/colorSelector";
import Slider from "../Components/Slider/Slider1/Slider.js";
import MySider from "../Components/Sider/Sider5/Sider.js";

const { Content, } = Layout;

const Services = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <MySider>
                <Layout className="site-layout">
                    <NavBar keyVal="3" />
                    <Content>
                        <h2>Our Sevices</h2>
                        <ColorSelector />
                        <Slider/>
                    </Content>
                    <MyFooter />
                </Layout>
                </MySider>
            }
        </ThemeContext.Consumer>
    )
}

export default Services