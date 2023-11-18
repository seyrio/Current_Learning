import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  c = "John";
  render() {
    return <div>This is a class component {this.c}</div>;
  }
}
