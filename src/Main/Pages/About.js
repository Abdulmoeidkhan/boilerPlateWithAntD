import React,{useEffect} from 'react';
import { ThemeContext } from "../GlobalEnvironment/contextInit"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";


const AboutUs = () => {
    useEffect(()=>{
        console.log("running")
    },[])
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
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
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default AboutUs