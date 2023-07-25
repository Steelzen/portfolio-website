import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import TechnicalSkillsOct from "./technicalSkillsOct";

const AboutMe = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://steelzen-website.herokuapp.com/mydata/aboutme/list"
        );
        setDetails(response.data[0]);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="aboutme">
      <div className="aboutme-container">
        <h1 className="aboutme-text text-lg font-bold">
          {" "}
          About {details["name"]}{" "}
        </h1>
        <p className="aboutme-text">{details["summary"]}</p>
        <h4 className="aboutme-text text-lg font-bold">Technical Skills</h4>
        <div className="techstack-container">
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight colo="red" position={[0, 0, 5]} />
            <TechnicalSkillsOct />
          </Canvas>
        </div>
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
            src="https://i.ibb.co/V3FYBXL/Nodejs-logo.png"
            alt="Nodejs-logo"
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
        <h4 className="aboutme-text text-lg font-bold">Contact Me</h4>
        <div className="contactme-container font-bold text-blue-500">
          <a href={"mailto:" + details["email"]}>Email</a>
          <a href={details["site"]} target="_blank">
            LinkedIn
          </a>
          <a href={details["github"]} target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
