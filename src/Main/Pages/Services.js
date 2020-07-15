import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import { Layout } from 'antd';
import NavBar from "../Components/NavBar/NavBar1/NavBar"

const Services = () => {
    return (
        <ThemeContext.Consumer>
            {colorsState =>
                <Layout>
                    <NavBar keyVal="3"/>
                    <h1>
                        <span
                            style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}
                        >Services</span>
                    </h1>
                </Layout>
            }
        </ThemeContext.Consumer>
    )
}

export default Services