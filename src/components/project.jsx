import React, { Component } from "react";
import axios from "axios";

class Project extends Component {
  state = {
    details: [],
  };

  async componentDidMount() {
    let data;

    await axios
      .get("http://steelzen-website.herokuapp.com/mydata/project/list")
      .then((res) => {
        data = res.data;
        this.setState({ details: data });
      })
      .catch((err) => {});
  }

  render() {
    const details = this.state.details;

    const items = details.map((detail) => (
      <div key={detail["id"]} className={"project-" + detail["id"]}>
        <h2>{detail["name"]}</h2>
        <p className="project-text">{detail["content"]}</p>
        <div>
          <a className="site-link" href={detail["site_link"]}>
            Link
          </a>
          <a className="code-link" href={detail["code_link"]}>
            Code
          </a>
        </div>
        <img className="project-img" src={detail["img_src"]} />
      </div>
    ));

    return <div className="project-list"> {items} </div>;
  }
}

export default Project;
