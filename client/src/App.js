import React, { Component, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import "./App.css";
const socket = socketIOClient("http://127.0.0.1:3001");

class App extends Component {
  state = {
    response: "",
    // endpoint: "http://127.0.0.1:3001"
  }

  componentDidMount() {
    // const {endpoint} = this.state;
    // Connect to the socket
    // const socket = socketIOClient(endpoint);
    socket.on("outgoing data", data => {
      this.setState({response: data})
      console.log( `The book "${this.state.response.title}" has been saved!` );
    })
  }

  render() {
    const {response} = this.state;
    console.log("response!!!!!");
    console.log(response);

    return (
      <Router>
        <>
          <Nav />
          <Switch>
            {/*<Route exact path="/" component={Search} />*/}
            <Route
              exact
              path="/"
              // render={props => <Search {...props} endpoint={this.state.endpoint} />}
              render={props => <Search {...props} socket={socket} />}
            />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
