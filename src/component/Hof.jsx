import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Posts from "./Posts.jsx";


export default class Hof extends Component {
  constructor(){
    super()
    this.state ={
        data: [],
    }
  }
    // componentDidMount(){
    //   fetch('/hof')
    //  n(res => res.json())
    //   .then((res) => { post = res})
    // }

    componentDidMount() {
      fetch('/hof')
        .then(response => response.json())
        .then(data => this.setState({ data }, ()=> {console.log(this.state)}));
    }
   

    render() {
      const actualPost = [];
      for (let i = 0; i < this.state.data.length; i++) {
        actualPost.push(<div className="buildingPost"><Posts name={this.state.data[i].name} date={this.state.data[i].date} city={this.state.data[i].city} img={this.state.data[i].img} detail={this.state.data[i].detail} /></div>)
  
      }
        return (
          <div className='hofback'>
          <h1>Skyscrapper Hall of Fame</h1>
          {actualPost}
          </div>
         
        );
    }
  }