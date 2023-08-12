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
        <AboutMe />
        <Project />
      </main>
    );
  }
}

export default MainPage;
