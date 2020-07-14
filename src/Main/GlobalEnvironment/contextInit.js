import React,{ createContext } from "react";
import { useImmerReducer } from "use-immer"




export const ThemeContext = createContext(null);
export const ThemeContextChanger = createContext(null);




let themeChanger = (draft, action) => {
    switch (action.type) {
        case "theme1":
            draft.colors =initialState.colors
            sessionStorage.setItem("colors",JSON.stringify(draft))
            return;
        case "theme2":
            draft.colors = {
                color1: "#242582",
                color2: "#553D67",
                color3: "#F64C72",
                color4: "#99738E",
                color5: "#2F2FA2",
            }
            sessionStorage.setItem("colors",JSON.stringify(draft))
            return;
        case "theme3":
            draft.colors = {
                color1: "#5D5C61",
                color2: "#379683",
                color3: "#7395AE",
                color4: "#557A95",
                color5: "#B1A296",
            }
            sessionStorage.setItem("colors",JSON.stringify(draft))
            return;
        case "theme4":
            draft.colors = {
                color1: "#5680E9",
                color2: "#84CEEB",
                color3: "#5AB9EA",
                color4: "#C1C8E4",
                color5: "#8860D0",
            }
            sessionStorage.setItem("colors",JSON.stringify(draft))
            return;
        case "theme5":
            draft.colors = {
                color1: "#00887A",
                color2: "#FFCCBC",
                color3: "#FFFFFF",
                color4: "#D3E3FC",
                color5: "#77A6F7",
            }
            sessionStorage.setItem("colors",JSON.stringify(draft))
            return;
        default:
            draft.colors = initialState.colors
            return;
    }
}


let initialState=JSON.parse(sessionStorage.getItem("colors")) ||{
    colors: {
        color1: "#E27D60",
        color2: "#85DCB",
        color3: "#E8A87C",
        color4: "#C38D9E",
        color5: "#41B3A3",
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


