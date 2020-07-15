import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import NavBar from "../Components/NavBar/NavBar1/NavBar"

const AboutUs = () => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout>
                    <NavBar keyVal="2"/>
                    <h1>
                        <span
                            style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}
                        >About</span>
                        <span
                            style={{ backgroundColor: colorsState.colors.color3, color: colorsState.colors.color4 }}
                        >Us</span>
                        <span
                            style={{ backgroundColor: colorsState.colors.color5, color: "#f4f4f4" }}
                        >:P</span>
                    </h1>
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default AboutUs