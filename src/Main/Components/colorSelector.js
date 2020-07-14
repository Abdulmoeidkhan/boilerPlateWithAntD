import React from 'react';
import { ThemeContextChanger } from "../GlobalEnvironment/contextInit"
import  "./colorSelector.css"



const colorSelector = () => {
    return (
        <>
            <ThemeContextChanger.Consumer>{
                colorChanger => <>
                    <div className="color-selector-div theme1" onClick={() => colorChanger.dispatch({ type: "theme1" })}></div>
                    <div className="color-selector-div theme2" onClick={() => colorChanger.dispatch({ type: "theme2" })}></div>
                    <div className="color-selector-div theme3" onClick={() => colorChanger.dispatch({ type: "theme3" })}></div>
                    <div className="color-selector-div theme4" onClick={() => colorChanger.dispatch({ type: "theme4" })}></div>
                    <div className="color-selector-div theme5" onClick={() => colorChanger.dispatch({ type: "theme5" })}></div>
                </>
            }
            </ThemeContextChanger.Consumer>
        </>
    )
}

export default colorSelector