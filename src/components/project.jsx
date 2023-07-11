import React, { Component } from "react";
import axios from "axios";

class Project extends Component {
  state = {
    details: [],
  };

  async componentDidMount() {
    let data;

    await axios
      .get("https://steelzen-website.herokuapp.com/mydata/project/list")
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
          <a className="site-link" href={detail["site_link"]} target="_blank">
            Link
          </a>
          <a className="code-link" href={detail["code_link"]} target="_blank">
            Code
          </a>
        </div>
        <div className="h-auto md:h-96 p-10">
          <img
            className="w-full h-full rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-10 cursor-pointer"
            src={detail["img_src"]}
            alt="project"
          />
        </div>
      </div>
    ));

    return <div className="project-list"> {items} </div>;
  }
}

export default Project;
