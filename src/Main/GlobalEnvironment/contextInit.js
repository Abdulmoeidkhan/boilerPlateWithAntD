import React, { createContext } from "react";
import { useImmerReducer } from "use-immer"




export const ThemeContext = createContext(null);
export const ThemeContextChanger = createContext(null);




let themeChanger = (draft, action) => {
    switch (action.type) {
        case "theme1":
            draft.colors = {
                color1: "#d48806",
                color2: "#874d00",
                color3: "#ffd666",
                // color3:"#fff",
                type:"dark"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme2":
            draft.colors = {
                color1: "#3f6600",
                color2: "#254000",
                color3: "#bae637",
                // color3:"#fff",
                type:"dark"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme3":
            draft.colors = {
                color1: "#003a8c",
                color2: "#002766",
                color3: "#40a9ff",
                // color3:"#fff",
                type:"dark"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme4":
            draft.colors = {
                color1: "#22075e",
                color2: "#120338",
                color3: "#d3adf7",
                // color3:"#fff",
                type:"dark"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme5":
            draft.colors = {
                color1: "#ffc53d",
                color2: "#faad14",
                color3: "#ffe58f",
                // color3:"#000",
                type:"light"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme6":
            draft.colors = {
                color1: "#bae637",
                color2: "#7cb305",
                color3: "#eaff8f",
                // color3:"#000",
                type:"light"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme7":
            draft.colors = {
                color1: "#69c0ff",
                color2: "#40a9ff",
                color3: "#bae7ff",
                // color3:"#000",
                type:"light"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        case "theme8":
            draft.colors = {
                color1: "#531dab",
                color2: "#722ed1",
                color3: "#efdbff",
                // color3:"#000",
                type:"light"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        default:
            draft.colors = initialState.colors
            return;
    }
}


let initialState = JSON.parse(sessionStorage.getItem("colors")) || {
    colors: {
        color1: "#d48806",
        color2: "#874d00",
        color3: "#E8A87C",
        // color3:"#fff",
        type:"light"
        // color4: "#C38D9E",
        // color5: "#41B3A3",
    }
}

export let ThemeWrapper = (props) => {
    let [color, dispatch] = useImmerReducer(themeChanger, initialState)
    return (
        <ThemeContextChanger.Provider value={{ dispatch }}>
            <ThemeContext.Provider value={color}>
                {props.children}
            </ThemeContext.Provider>
        </ThemeContextChanger.Provider>
    )
}


