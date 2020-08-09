import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./../pages/home/index";
import Header from "../layout/header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
