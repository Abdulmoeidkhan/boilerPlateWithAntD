import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import MyFooter from "../Components/Footer/Footer1/Footer.js"
import ColorSelector  from "../Components/ColorSelector/colorSelector";
import MySider from "../Components/Sider/Sider4/Sider.js"

const { Content, } = Layout;

const ContactUs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <MySider>
                    <Content>
                        <h2>Contact Us</h2>
                        <ColorSelector />
                    </Content>
                    <MyFooter />
                </MySider>
            }
        </ThemeContext.Consumer>
    )
}

export default ContactUs