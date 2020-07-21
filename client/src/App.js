import React, { Component } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Notification from "./components/Notification";


class App extends Component {
  state = {
    response: ""
  }

  socketURL =
    process.env.NODE_ENV === 'production'
      ? window.location.hostname
      : 'http://localhost:3001';

  socket = io.connect(this.socketURL, {secure: true});

  componentDidMount() {
    // this.socket.on("outgoing data", data => {
    //   this.setState({response: data})
    //   console.log( `The book "${this.state.response.title}" has been saved!` );
    // })

    this.socket.on("incoming data", data => {
      this.setState({response: data})
      console.log( `The book "${this.state.response.title}" has been saved!` );
    })
  }

  render() {
    return (
      <Router>
        <>
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Search {...props} socket={this.socket} />}
            />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
          <Notification response={this.state.response} />
        </>
      </Router>
    );
  }
}

export default App;
