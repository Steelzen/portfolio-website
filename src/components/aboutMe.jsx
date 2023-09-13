import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import TechnicalSkills from "./technicalSkills";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

import javaLogo from "../resource/Java-logo.png";
import javaScriptLogo from "../resource/Java-Script-logo.png";
import pythonLogo from "../resource/Python-logo.png";
import cssLogo from "../resource/CSS-logo.png";
import tailwindLogo from "../resource/Tailwind-logo.jpeg";
import androidLogo from "../resource/android-logo.jpg";
import reactLogo from "../resource/React-logo.png";
import djangoLogo from "../resource/django-logo.jpg";
import nodejsLogo from "../resource/Nodejs-logo.png";
import sqlLogo from "../resource/SQL-logo.png";
import gitLogo from "../resource/Git-logo.png";

const AboutMe = () => {
  const [details, setDetails] = useState([]);

  const imageUrls = [
    javaLogo,
    javaScriptLogo,
    pythonLogo,
    cssLogo,
    tailwindLogo,
    androidLogo,
    reactLogo,
    djangoLogo,
    nodejsLogo,
    sqlLogo,
    gitLogo,
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
    <div className="aboutme bg-black ">
      <div className="aboutme-container text-slate-300">
        <h1 className="aboutme-text text-lg font-bold"> About Me </h1>
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
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
