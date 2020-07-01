import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  const socket = io("http://localhost:3001", {transports: ["websocket"], upgrade: false});
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          {/*<Route exact path="/" component={Search} />*/}
          <Route
            exact
            path="/"
            render={props => <Search {...props} socket={socket} />}
          />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
