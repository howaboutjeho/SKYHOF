import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={"./images/skyhoflogo.png"} width="200" height="100" />
        </div>

        <div className="body">
        <img src={"./images/index.jpg"} />
        <Link to='/hof'>
          <button className='Hof'>Hall of Fame</button>
        </Link>
        </div>
        
        <div className="footer">
          <form action="/add" method="POST">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="city" name="city" />
            <input type="text" placeholder="img" name="img" />
            <input type="text" placeholder="detail" name="detail" />
            <input type="text" placeholder="date" name="date" />
            <button type="submit">Add</button>
          </form>
          <form action="/update" method="PUT">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="city" name="city" />
            <input type="text" placeholder="img" name="img" />
            <input type="text" placeholder="detail" name="detail" />
            <input type="text" placeholder="date" name="date" />
            <button type="submit">Update</button>
          </form>
          <form action="/delete" method="Delete">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="city" name="city" />
            <input type="text" placeholder="img" name="img" />
            <input type="text" placeholder="detail" name="detail" />
            <input type="text" placeholder="date" name="date" />
            <button type="submit">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;