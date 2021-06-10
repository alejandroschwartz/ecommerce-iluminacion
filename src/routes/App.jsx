import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Products from "../containers/Products";
import Layout from "../components/Layout";
import About from "../containers/About";
import Contact from "../containers/Contact";
import View from "../containers/View";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/inicio" component={Home} />
                <Route exact path="/sobre-mi" component={About} />
                <Route exact path="/" component={Products} />
                <Route exact path="/item/:id" component={View} />
                <Route exact path="/contacto" component={Contact} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
