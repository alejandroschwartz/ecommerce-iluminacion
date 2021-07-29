import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Layout from "../components/Layout";
import Description from "../containers/Description";
import About from "../containers/About";
import Product from '../containers/Products';
import ProductId from '../components/ProductId';
import NotFound from '../containers/NotFound';

const App = () => {

    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/productos" component={Product} />
                    <Route exact path="/productos/:id" component={ProductId} />
                    <Route exact path="/descripcion" component={Description} />
                    <Route exact path="/sobre-mi" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
};

export default App;
