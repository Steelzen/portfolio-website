import React, { useState, useEffect } from "react";
import axios from "axios";

function Project() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://steelzen-website.herokuapp.com/mydata/project/list"
        );
        const data = response.data;
        setDetails(data);
      } catch (error) {
        // Handle error if needed
      }
    }

    fetchData();
  }, []);

  const items = details.map((detail) => (
    <div key={detail["id"]} className={"project-" + detail["id"]}>
      <h2 className="text-lg font-bold">{detail["name"]}</h2>
      <p className="project-text">{detail["content"]}</p>
      <div>
        <a
          className="site-link text-blue-500"
          href={detail["site_link"]}
          target="_blank"
        >
          Demo
        </a>
        <a
          className="code-link text-blue-500"
          href={detail["code_link"]}
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <div className="h-auto md:h-96 p-10">
        <a href={detail["site_link"]}>
          <img
            className="w-full h-full rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-10 cursor-pointer"
            src={detail["img_src"]}
            alt="project"
          />
        </a>
      </div>
    </div>
  ));

  return (
    <div className="project mt-3">
      <div className="project-title-wrapper">
        <div className="project-title-container">
          <h1 className="text-3xl ">Projects</h1>
        </div>
      </div>
      <div className="project-list">{items}</div>
    </div>
  );
}

export default Project;
