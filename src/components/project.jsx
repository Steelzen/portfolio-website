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
    <div
      key={detail["id"]}
      className="m-0 my-2 mx-2 shrink-0 w-350 bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-10 cursor-pointer"
    >
      <a href={detail["site_link"]}>
        <img
          className="w-full h-300 object-cover rounded-t-lg"
          src={detail["img_src"]}
          alt="project"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{detail["name"]}</h3>
          <p className="text-sm text-gray-600 text-left">{detail["content"]}</p>
          <p className="text-sm text-gray-600 text-left mt-2 font-bold">
            {detail["additional_info"]}
          </p>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="project mt-3 mb-12">
      <div className="project-title-wrapper">
        <div className="project-title-container max-w-screen-2xl">
          <div class="text-5xl font-extrabold ...">
            <span class="bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-yellow-500">
              Projects
            </span>
          </div>
        </div>
      </div>
      <div class="max-w-screen-2xl flex justify-center md: mx-auto">
        <div className="flex flex-col space-x-4 space-y-4 py-4 px-2 sm:flex-row overflow-x-auto ">
          {items}
        </div>
      </div>
    </div>
  );
}

export default Project;
