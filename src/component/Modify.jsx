import React, { Component } from "react";

export default class Modify extends Component {
    render() {
      return (
        <form action="/modify" method="POST">
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="city" name="city" />
        <input type="text" placeholder="img" name="img" />
        <input type="text" placeholder="detail" name="detail" />
        <input type="text" placeholder="date" name="date" />
        <button type="submit">Submit</button>
      </form>
      );
    }
  }
      