import React from "react";
import axios from "axios";

class AboutMe extends React.Component {
  state = { details: [] };

  async componentDidMount() {
    let data;

    await axios
      .get("http://localhost:8000/mydata/aboutme/list")
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
      <div>
        <h1> About Me </h1>
        <p>name: {this.state.details["name"]}</p>
        <p>email: {this.state.details["email"]} </p>
        <p>phone: {this.state.details["phone"]}</p>
        <p>site: {this.state.details["site"]}</p>
        <p>github: {this.state.details["github"]}</p>
        <p>{this.state.details["summary"]}</p>
      </div>
    );
  }
}

export default AboutMe;
