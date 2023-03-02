import React, { Component } from "react";
import AboutMe from "./aboutMe";
import Project from "./project";

class MainPage extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <div className="main-page">
        <AboutMe />
        <div className="project-title-container">
          <h1> My Works </h1>
        </div>
        <Project howMany={this.state.numberOfProject} />
      </div>
    );
  }
}

export default MainPage;
