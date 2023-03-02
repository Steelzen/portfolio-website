import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import _uniqueId from "lodash/uniqueId";

const Introduction = (props) => {
  const [id] = useState(_uniqueId("introduction"));
  const [details, setDetails] = useState(0);

  const handleScroll = (event) => {
    if (document.documentElement.scrollTop >= 400) {
      $(".my-picture").fadeOut();
      $("#introduction2").fadeOut();
    } else {
      $(".my-picture").fadeIn("slow");
      $("#introduction2").fadeIn("fast");
    }
  };

  useEffect(() => {
    let data;

    axios
      .get("http://localhost:8000/mydata/aboutme/list")
      .then((res) => {
        data = res.data;
        setDetails(data[0]);
      })
      .catch((err) => {});

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
          alt="profile-photo"
        ></img>
      </div>
      <div id={id}>{details["introductory"]}</div>
    </div>
  );
};

export default Introduction;
