import React from 'react';
// import AboutUs from "./Components/about"
import Home from "../Pages/Home.js"
import AboutUs from "../Pages/About.js"
import Services from "../Pages/Services.js"
import Blogs from "../Pages/Blogs.js"
import ContactUs from "../Pages/Contact"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";





function Routes() {
    return (
        <Router>
            <Switch>
                <Route
                    path={`/`}
                    component={Home}
                    exact />
                <Route path={`/about`} component={AboutUs} />
                <Route path={`/services`} component={Services} />
                <Route path={`/blogs`} component={Blogs} />
                <Route path={`/contact`} component={ContactUs} />
            </Switch>
        </Router>
    );
}

export default Routes;

