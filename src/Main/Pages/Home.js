import React from 'react';
import { Layout } from 'antd';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import ColorSelector  from "../Components/ColorSelector/colorSelector"
import NavBar from "../Components/NavBar/NavBar1/NavBar"
import MyFooter from "../Components/Footer/Footer1/Footer.js"


const Home = (props) => {
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                <Layout>
                    <NavBar keyVal="1"/>
                    <ColorSelector/>
                    <MyFooter/>
                </Layout>
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