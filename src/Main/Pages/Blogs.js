import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
// import NavBar from "../Components/NavBar/NavBar2/NavBar";
import MyFooter from "../Components/Footer/Footer1/Footer.js";
import ColorSelector from "../Components/ColorSelector/colorSelector";
import MySider from "../Components/Sider/Sider3/Sider.js"
import Slider from "../Components/Slider/Slider3/Slider.js";

const { Content, } = Layout;

const Blogs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <MySider>
                    <Content>
                        <h2>Blog</h2>
                        <ColorSelector />
                        <Slider/>
                    </Content>
                    <MyFooter />
                </MySider>
            }
        </ThemeContext.Consumer>
    )
}

export default Blogs