import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

class AboutMe extends React.Component {
  state = { details: [] };

  async componentDidMount() {
    let data;

    await axios
      .get("http://localhost:8000/mydata/aboutme/list/1")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        <h1> About Me </h1>
        <Button
          className="edit-aboutme-button"
          href="/aboutMeEdit"
          variant="primary"
        >
          Edit
        </Button>
        <p>name: {this.state.details["name"]}</p>
        <p>email: {this.state.details["email"]} </p>
        <p>phone: {this.state.details["phone"]}</p>
        <p>{this.state.details["summary"]}</p>
      </div>
    );
  }
}

export default AboutMe;
