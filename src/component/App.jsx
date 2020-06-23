import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>'My React App'</h1>
        <h1> May Node and Express be with you. </h1>
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
