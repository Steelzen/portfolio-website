import React from "react";
import axios from "axios";

class AboutMeEdit extends React.Component {
  state = {
    details: [],
    name: "",
    email: "",
    phone: "",
    summary: "",
  };

  componentDidMount() {
    let data;

    axios
      .get("http://localhost:8000/mydata/aboutme/list/1")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
          name: data["name"],
          email: data["email"],
          phone: data["phone"],
          summary: data["summary"],
        });
      })
      .catch((err) => {});
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:8000/mydata/aboutme/update/1", {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        summary: this.state.summary,
      })
      .then((res) => {
        this.setState({
          name: "",
          email: "",
          phone: "",
          summary: "",
        });
      })
      .catch((err) => {});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Summary:
          <textarea
            name="summary"
            value={this.state.summary}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    );
  }
}

export default AboutMeEdit;
