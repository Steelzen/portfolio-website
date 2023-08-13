import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Project() {
  const [details, setDetails] = useState([]);
  const scrollContainerRef = useRef(null);

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

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const items = details.map((detail) => (
    <div
      key={detail.id}
      className="flex-shrink-0 w-350 bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-10 cursor-pointer mx-3 my-3"
    >
      <a href={detail.site_link}>
        <img
          className="w-full h-300 object-cover rounded-t-lg"
          src={detail.img_src}
          alt="project"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{detail.name}</h3>
          <p className="text-sm text-gray-600 text-left">{detail.content}</p>
          <p className="text-sm text-gray-600 text-left mt-2 font-bold">
            {detail.additional_info}
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
      <div className="flex w-full justify-center mx-auto overflow-hidden">
        <button onClick={scrollLeft} className="p-4 hidden sm:inline-block">
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex flex-col  sm:flex-row overflow-x-scroll space-x-4 py-4 px-2 scrollbar-hide"
        >
          {items}
        </div>
        <button onClick={scrollRight} className="p-4 hidden sm:inline-block">
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default Project;
