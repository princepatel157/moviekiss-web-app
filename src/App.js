import React from "react";
import "./App.css";
import Home from "./Home.js";
import Header from "./Header.js";
import Cat from "./Catog.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Cat />
          <Home />
        </Route>
        <Route exact path="/contact">
          <Header />
          <Cat />
          <h2>contact page</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
