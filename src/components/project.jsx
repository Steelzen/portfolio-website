import React, { Component } from "react";
import ItemCard from "../common/card";

class Project extends Component {
  state = {};
  render() {
    const { numbersOfRow } = this.props;

    return (
      <div className="project-list">
        {numbersOfRow.map((number) => (
          <div key={number.toString()} className={"section" + number}>
            <h2>Section {number}</h2>
            <ItemCard id={"project" + number} />
          </div>
        ))}
      </div>
    );
  }
}

export default Project;
