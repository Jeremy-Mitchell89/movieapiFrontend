import React, { Component } from "react";
import "./App.scss";
import Playing from "./Playing";
import Trending from "./Trending";
class App extends Component {
  render() {
    return (
      <div>
        <Trending />
        <Playing />
      </div>
    );
  }
}

export default App;
