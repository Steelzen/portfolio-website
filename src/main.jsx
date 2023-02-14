import React, { Component } from "react";
import AboutMe from "./components/aboutMe";
import Project from "./components/project";

class MainPage extends Component {
  state = {};

  render() {
    return (
      <div className="main-page">
        <AboutMe name="Taehyung Kwon" />
        <h1> This is main Page </h1>
        <Project howMany={1} />
      </div>
    );
  }
}

export default MainPage;
