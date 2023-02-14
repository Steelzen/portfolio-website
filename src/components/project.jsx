import React, { Component } from "react";
import ItemCard from "../common/card";

class Project extends Component {
  state = {};
  render() {
    const { howMany } = this.props;
    const items = [];
    for (let n = 1; n <= howMany; n++) {
      items.push(
        <div key={n.toString()}>
          <h2>Section {n}</h2>
          <ItemCard id={"test" + n} />
        </div>
      );
    }

    return <div className="project-list">{items}</div>;
  }
}

export default Project;
