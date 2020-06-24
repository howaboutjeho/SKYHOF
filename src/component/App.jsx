import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className='header'>
      <h1>hello</h1>
      <img src={'/src/images/skyhoflogo.png'}/>
      {/* <button className='login'>login</button> */}
      <form action="/modify" method="POST">
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="city" name="city" />
        <input type="text" placeholder="img" name="img" />
        <input type="text" placeholder="detail" name="detail" />
        <input type="text" placeholder="date" name="date" />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
