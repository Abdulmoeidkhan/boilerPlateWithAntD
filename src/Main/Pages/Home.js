import React from 'react';
import { Layout } from 'antd';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import ColorSelector from "../Components/ColorSelector/colorSelector"
import NavBar from "../Components/NavBar/NavBar1/NavBar"
import MyFooter from "../Components/Footer/Footer1/Footer.js"
import MySider from "../Components/Sider/Sider1/Sider.js"

const { Content, } = Layout;

const Home = (props) => {
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <MySider>
                    <Layout className="site-layout">
                        <NavBar keyVal="1" />
                        <Content>
                            <ColorSelector />
                        </Content>
                        <MyFooter />
                    </Layout>
                    </MySider>
                    {/* <h1>
                        <span style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}>Hello</span>
                        <span style={{ backgroundColor: colorsState.colors.color3, color: colorsState.colors.color4 }}>Boiler</span>
                        <span style={{ backgroundColor: colorsState.colors.color5, color: "#f4f4f4" }}>Plate</span>
                    </h1>
                    <Link to="/about">About</Link> */}

                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Home