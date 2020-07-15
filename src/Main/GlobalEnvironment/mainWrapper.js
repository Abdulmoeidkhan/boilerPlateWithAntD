import React from 'react';
import { ThemeWrapper } from "./contextInit"
import Routes from "./router"

function MainComponent(props) {
    return (
            <ThemeWrapper>
                <Routes />
            </ThemeWrapper>
    );
}

export default MainComponent;

