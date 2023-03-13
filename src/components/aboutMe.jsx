import React from "react";
import axios from "axios";

class AboutMe extends React.Component {
  state = { details: [] };

  async componentDidMount() {
    let data;

    await axios
      .get("https://steelzen-website.herokuapp.com/mydata/aboutme/list")
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
          <div className="tech-img-container">
            <img
              className="tech-img"
              src="https://i.ibb.co/wN35QWj/Java-logo.png"
              alt="Java-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/SvdgbM6/Java-Script-logo.png"
              alt="JS-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/fSCwYVY/Python-logo.png"
              alt="Python-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/Xb5HCZ6/CSS-logo.png"
              alt="CSS-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/Y3YGbr9/android-logo.jpg"
              alt="Android-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/L81KSpJ/React-logo.png"
              alt="React-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/ydkptPJ/django-logo.jpg"
              alt="Django-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/9sVXgGz/SQL-logo.png"
              alt="SQL-logo"
            />
            <img
              className="tech-img"
              src="https://i.ibb.co/0rvrJfz/Git-logo.png"
              alt="Git-logo"
            />
          </div>
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
