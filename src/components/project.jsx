import React, { Component } from "react";
import ItemCard from "../common/card";

class Project extends Component {
  state = {};
  render() {
    const { howMany } = this.props;
    const items = [];
    for (let n = 1; n <= howMany; n++) {
      items.push(<ItemCard key={n.toString()} id={"test" + n} />);
    }

    return <div className="project-list">{items}</div>;
  }
}

export default Project;
