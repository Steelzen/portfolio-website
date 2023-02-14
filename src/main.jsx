import React, { Component } from "react";
import Project from "./components/project";

class MainPage extends Component {
  state = {};

  render() {
    return (
      <div className="main-page">
        <h1> This is main Page </h1>
        <Project numbersOfRow={[1, 2, 3, 4, 5]} />
      </div>
    );
  }
}

export default MainPage;
