import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

class Project extends Component {
  state = {
    details: [],
  };

  async componentDidMount() {
    let data;

    await axios
      .get("http://localhost:8000/mydata/project/list")
      .then((res) => {
        data = res.data;
        this.setState({ details: data });
      })
      .catch((err) => {});
  }

  async handleClick(event) {
    await axios
      .delete(
        "http://localhost:8000/mydata/project/delete/" + event.target.value
      )
      .then(() => alert("delete successful"))
      .catch((err) => {
        alert("delete unsuccessful");
      });
  }

  render() {
    const details = this.state.details;

    const items = details.map((detail) => (
      <div key={detail["id"]} className={"project-" + detail["id"]}>
        <h2>{detail["name"]}</h2>
        <p>{detail["content"]}</p>
        <div>
          <a className="site-link" href={detail["site_link"]}>
            Link
          </a>
          <a className="code-link" href={detail["code_link"]}>
            Code
          </a>
        </div>
        <Button
          className="edit-project-button"
          href={"/projectEdit/" + detail["id"]}
          variant="primary"
        >
          Edit
        </Button>
        <Button
          className="delete-project-button"
          variant="primary"
          value={detail["id"]}
          onClick={this.handleClick}
        >
          Delete
        </Button>
      </div>
    ));

    return <div className="project-list"> {items} </div>;
  }
}

export default Project;
