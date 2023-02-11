import React, { Component } from "react";
import ProjectCard from "./common/card";

class MainPage extends Component {
  state = {};

  render() {
    const { numbersOfRow } = this.props;

    return (
      <div className="main-page">
        <h1> This is main Page </h1>
        {numbersOfRow.map((number) => (
          <div key={number.toString()} className={"section" + number}>
            <h2>Section {number}</h2>
            <ProjectCard id={"project" + number} />
          </div>
        ))}
      </div>
    );
  }
}

export default MainPage;
