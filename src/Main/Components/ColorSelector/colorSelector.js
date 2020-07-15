import React, { useState } from 'react';
import { ThemeContextChanger } from "../../GlobalEnvironment/contextInit"
import { Button } from 'antd';
import { SettingOutlined } from "@ant-design/icons"
import "./colorSelector.css"



const ColorSelector = () => {
    let [visible, setVisible] = useState(false)
    let showDrawer = () => {
        setVisible(!visible)
    };
    return (
        <>
            <ThemeContextChanger.Consumer>
                {
                    colorChanger =>
                        <div className="site-drawer-render-in-current-wrapper my-color-drawer">
                            <div className="button-parent-drawer" >
                                <Button onClick={showDrawer} icon={<SettingOutlined />} />
                            </div>
                            <div className={visible ? "drawer-show-class" : "drawer-hidden-class"}>
                                <div className="color-selector-div theme1" onClick={() => colorChanger.dispatch({ type: "theme1" })}></div>
                                <div className="color-selector-div theme2" onClick={() => colorChanger.dispatch({ type: "theme2" })}></div>
                                <div className="color-selector-div theme3" onClick={() => colorChanger.dispatch({ type: "theme3" })}></div>
                                <div className="color-selector-div theme4" onClick={() => colorChanger.dispatch({ type: "theme4" })}></div>
                                <div className="color-selector-div theme5" onClick={() => colorChanger.dispatch({ type: "theme5" })}></div>
                            </div>
                        </div>
                }
            </ThemeContextChanger.Consumer>
        </>
    )
}

export default ColorSelector

