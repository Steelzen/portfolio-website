import React, { Component } from "react";
import AboutMe from "./aboutMe";
import Introduction from "./introduction";
import Project from "./project";

class MainPage extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <main className="container-main">
        <Introduction />
        <div className="main-page">
          <AboutMe />
          <div className="project-title-wrapper">
            <div className="project-title-container">
              <h1> My Works </h1>
            </div>
          </div>
          <Project />
        </div>
      </main>
    );
  }
}

export default MainPage;
