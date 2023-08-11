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
        {/* <div className="main-page bg-gradient-to-r from-sky-500 to-indigo-500">
          <Project />
        </div> */}
      </main>
    );
  }
}

export default MainPage;
