import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

import titleImg from "../imgs/title-img.jpeg";
import profileImg from "../imgs/Profile_photo.jpeg";

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
      })
      .catch((err) => {});
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--title-img",
      `url("${titleImg}")`
    );

    fetchData();

    window.addEventListener("scroll", handleScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className="introduction-wrapper">
      <div className="main-flex">
        <div className="my-picture">
          <img src={profileImg} className="rounded-circle" alt="profile"></img>
        </div>
        <div className="intro-message">
          <h1>WELCOME...</h1>
          <div>{details["introductory"]}</div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
