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
      .get("http://steelzen-website.herokuapp.com/mydata/aboutme/list")
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
    <div className="main-flex">
      <div className="my-picture">
        <img
          src={details["photo_src"]}
          className="rounded-circle"
          alt="profile"
        ></img>
      </div>
      <div className="intro-message">
        <h1>WELCOME...</h1>
        <div>{details["introductory"]}</div>
      </div>
    </div>
  );
};

export default Introduction;
