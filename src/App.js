import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
