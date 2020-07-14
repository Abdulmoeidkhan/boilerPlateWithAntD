import React from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
import ColorSelector  from "../Components/colorSelector"
import {
    Link
} from "react-router-dom";


const Home = () => {
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <h1>
                        <span style={{ backgroundColor: colorsState.colors.color1, color: colorsState.colors.color2 }}>Hello</span>
                        <span style={{ backgroundColor: colorsState.colors.color3, color: colorsState.colors.color4 }}>Boiler</span>
                        <span style={{ backgroundColor: colorsState.colors.color5, color: "#f4f4f4" }}>Plate</span>
                    </h1>
                    <Link to="/about">About</Link>
                </>}
            </ThemeContext.Consumer>
            <ColorSelector/>
        </>
    )
}

export default Home