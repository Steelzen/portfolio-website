import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import TechnicalSkills from "./technicalSkills";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const AboutMe = () => {
  const [details, setDetails] = useState([]);

  // Array of image URLs to use as textures
  const imageUrls = [
    "https://i.ibb.co/Z8znc9m/Java-logo.png",
    "https://i.ibb.co/SvdgbM6/Java-Script-logo.png",
    "https://i.ibb.co/fSCwYVY/Python-logo.png",
    "https://i.ibb.co/Xb5HCZ6/CSS-logo.png",
    "https://i.ibb.co/4tHqF2F/Tailwind-logo.jpg",
    "https://i.ibb.co/Y3YGbr9/android-logo.jpg",
    "https://i.ibb.co/L81KSpJ/React-logo.png",
    "https://i.ibb.co/ydkptPJ/django-logo.jpg",
    "https://i.ibb.co/V3FYBXL/Nodejs-logo.png",
    "https://i.ibb.co/9sVXgGz/SQL-logo.png",
    "https://i.ibb.co/0rvrJfz/Git-logo.png",
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
