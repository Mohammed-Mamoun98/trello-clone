import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import Home from "./../pages/home/index";
import Header from "../layout/header";
import About from "./../pages/about/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
