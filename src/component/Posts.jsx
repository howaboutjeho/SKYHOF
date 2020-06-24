import React, { Component } from "react";

export default class Posts extends Component {
    constructor(props){
        super(props)
    }
    render() {
          return (
              <div className = 'innerPost'>
                  <h2>{this.props.name}</h2>
                  <h3>{this.props.city}</h3>
                  <h3>{this.props.date}</h3>
                  <img src={this.props.img} width="400" height="400"/>
                  <p>{this.props.detail}</p>
              </div>
          );
    }
}