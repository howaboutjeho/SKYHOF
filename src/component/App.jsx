import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Main from "./Main.jsx";
import Hof from "./Hof.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={Main} exact path='/' />
          <Route component={Hof} path='/Hof'/>
        </Switch>
      </div>
    );
  }
}

export default App;
