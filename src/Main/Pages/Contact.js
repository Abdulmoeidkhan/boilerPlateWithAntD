import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import NavBar from "../Components/NavBar/NavBar1/NavBar"
import MyFooter from "../Components/Footer/Footer1/Footer.js"
import ColorSelector  from "../Components/ColorSelector/colorSelector";

const ContactUs = (props) => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout>
                    <NavBar keyVal="5"/>
                    <h1>
                        <span
                            // style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}
                        >Contact Us</span>
                    </h1>
                    <ColorSelector/>
                    <MyFooter/>
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default ContactUs