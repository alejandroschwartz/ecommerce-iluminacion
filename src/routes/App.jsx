import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Layout from "../components/Layout";
import Description from "../containers/Description";
import About from "../containers/About";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/descripcion" component={Description} />
                <Route exact path="/sobre-mi" component={About} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
