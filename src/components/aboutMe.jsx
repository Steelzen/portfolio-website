import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import TechnicalSkills from "./technicalSkills";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

import Java from "../imgs/Java-logo.png";
import JS from "../imgs/Java-Script-logo.png";
import Python from "../imgs/Python-logo.png";
import CSS from "../imgs/CSS-logo.png";
import Android from "../imgs/android-logo.jpg";
import ReactLogo from "../imgs/React-logo.png";
import Django from "../imgs/django-logo.jpg";
import Nodejs from "../imgs/Nodejs-logo.png";
import SQL from "../imgs/SQL-logo.png";
import Git from "../imgs/Git-logo.png";
import Tailwind from "../imgs/Tailwind-logo.jpeg";

const AboutMe = () => {
  const [details, setDetails] = useState([]);

  // Array of image URLs to use as textures
  const imageUrls = [
    Java,
    JS,
    Python,
    CSS,
    Tailwind,
    Android,
    ReactLogo,
    Django,
    Nodejs,
    SQL,
    Git,
  ];

  const materials = imageUrls.map((imageUrl) => {
    const texture = new THREE.TextureLoader().load(imageUrl);
    return new THREE.MeshBasicMaterial({ map: texture });
  });

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
        <div className="techstack-container flex w-full flex-wrap mt-4 mb-8 content-center">
          {materials.map((material, index) => (
            <Canvas
              key={index}
              style={{ width: "100px", height: "130px" }}
              camera={{ position: [0, 0, 5], fov: 50 }}
            >
              <TechnicalSkills map={material.map} />
              <Preload all />
            </Canvas>
          ))}
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
