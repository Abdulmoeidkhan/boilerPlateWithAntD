import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import NavBar from "../Components/NavBar/NavBar1/NavBar"

const ContactUs = () => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout>
                    <NavBar keyVal="5"/>
                    <h1>
                        <span
                            style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}
                        >Contact Us</span>
                    </h1>
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default ContactUs