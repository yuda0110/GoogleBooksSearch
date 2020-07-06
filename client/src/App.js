import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Faye from "faye";

import "./App.css";

function App() {
  const client = new Faye.Client('http://localhost:3000');
  client.subscribe('/messages', function(message) {
    alert('Got a message: ' + message.text);
  });

  return (
    <Router>
      <>
        <Nav />
        <Switch>
          {/*<Route exact path="/" component={Search} />*/}
          <Route
            exact
            path="/"
            render={props => <Search {...props} myClient={client} />}
          />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
