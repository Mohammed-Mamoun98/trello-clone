import React from "react";
import "./App.scss";
import Router from "./router/router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
