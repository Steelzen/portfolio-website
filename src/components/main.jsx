import React, { Component } from "react";
import AboutMe from "./aboutMe";
import Project from "./project";
import Button from "react-bootstrap/esm/Button";

class MainPage extends Component {
  state = {
    numberOfProject: 0,
  };

  async componentDidMount() {}

  handleAdd = () => {
    // take the number of project from database.
    var numberOfProject = this.state.numberOfProject;
    numberOfProject += 1;
    this.setState({ numberOfProject: numberOfProject });
  };

  render() {
    return (
      <div className="main-page">
        <AboutMe />
        <div className="project-title-container">
          <h1> My Works </h1>
          {/* this will be for admin only */}
          <Button
            className="add-project-button"
            href="#"
            variant="primary"
            onClick={this.handleAdd}
          >
            Add
          </Button>
        </div>
        <Project howMany={this.state.numberOfProject} />
      </div>
    );
  }
}

export default MainPage;
