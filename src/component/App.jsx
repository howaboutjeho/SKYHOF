import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className='header'>
      <h1>hello</h1>
      <img src={'/src/images/skyhoflogo.png'}/>
      <button className='login'>login</button>
      </div>
    );
  }
}

export default App;
