import React from 'react';
// import AboutUs from "./Components/about"
import Home from "../Pages/Home.js"
import AboutUs from "../Pages/About.js"
import { ThemeWrapper } from "./contextInit"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";





function MainComponent(props) {
    return (
        <div className="App">
            <ThemeWrapper>
                <Router>
                    <Switch>
                        <Route
                            path={`/`}
                            component={Home}
                            exact />
                        <Route path={`/about`} component={AboutUs} />
                    </Switch>
                </Router>
            </ThemeWrapper>
        </div>
    );
}

export default MainComponent;

