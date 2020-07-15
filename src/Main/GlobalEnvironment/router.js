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
    Route
} from "react-router-dom";




function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route
                    path={`/`}
                    component={props=><Home {...props}/>}
                    exact />
                <Route path={`/about`} component={props=><AboutUs {...props}/>} />
                <Route path={`/services`} component={props=><Services {...props}/>} />
                <Route path={`/blogs`} component={props=><Blogs {...props}/>} />
                <Route path={`/contact`} component={props=><ContactUs {...props}/>} />
            </Switch>
        </Router>
    );
}

export default Routes;

