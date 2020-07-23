import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import MyFooter from "../Components/Footer/Footer1/Footer.js"
import ColorSelector  from "../Components/ColorSelector/colorSelector";
import MySider from "../Components/Sider/Sider4/Sider.js"
import Slider from "../Components/Slider/Slider4/Slider.js";
import MyCard from "../Components/Cards/Card4/Card"

const { Content, } = Layout;

const ContactUs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <MySider>
                    <Content>
                        <h2>Contact Us</h2>
                        <br/>
                        <ColorSelector />
                        <br/>
                        <Slider/>   
                        <br/>
                        <MyCard/>
                        <br/>
                    </Content>
                    <MyFooter />
                </MySider>
            }
        </ThemeContext.Consumer>
    )
}

export default ContactUs