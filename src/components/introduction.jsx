import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

const Introduction = (props) => {
  const [details, setDetails] = useState(0);

  const handleScroll = (event) => {
    if (document.documentElement.scrollTop >= 400) {
      $(".my-picture").fadeOut();
      $(".intro-message").fadeOut();
    } else {
      $(".my-picture").fadeIn("slow");
      $(".intro-message").fadeIn("fast");
    }
  };

  const fetchData = async () => {
    let data;

    await axios
      .get("https://steelzen-website.herokuapp.com/mydata/aboutme/list")
      .then((res) => {
        data = res.data;
        setDetails(data[0]);

        const titleImg = data[0]["title_img_src"];
        document.documentElement.style.setProperty(
          "--title-img",
          `url("${titleImg}")`
        );
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", handleScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className="introduction-wrapper pt-32 pb-20 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col justify-center justify-normal md:flex-row-reverse">
        <div className="flex justify-center md:justify-start">
          <img
            src={details["photo_src"]}
            className="rounded-full h-48 w-48 md:ml-5 shadow-xl hover:shadow-2xl"
            alt="profile"
          />
        </div>
        <div className="prose lg:prose-xl md:text-left">
          <h1 className="text-white m-0 mt-3 md:mt-0">Hi.</h1>
          <h1 className="m-0">I am Theo</h1>
          <p className="m-0"> Competitive Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
