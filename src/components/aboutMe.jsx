import React from "react";
import axios from "axios";

class AboutMe extends React.Component {
  state = { details: [] };

  async componentDidMount() {
    let data;

    await axios
      .get("http://steelzen-website.herokuapp.com/mydata/aboutme/list")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data[0],
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div className="aboutme">
        <div className="aboutme-container">
          <h1 className="aboutme-text"> About {this.state.details["name"]} </h1>
          <p className="aboutme-text">{this.state.details["summary"]}</p>
          <h4 className="aboutme-text">Technical Skills</h4>
          <div classNmae="tech-img-container"></div>
          <h4 className="aboutme-text">Contact Me</h4>
          <div className="contactme-container">
            <a href={"mailto:" + this.state.details["email"]}>Email</a>
            <a href={this.state.details["site"]}>LinkedIn</a>
            <a href={this.state.details["github"]}>Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
