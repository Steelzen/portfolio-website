import React, { useEffect, useState } from "react";
import $ from "jquery";
import _uniqueId from "lodash/uniqueId";
import MyPicture from "./myPicture";

const Introduction = (props) => {
  const [id] = useState(_uniqueId("introduction"));

  const handleScroll = (event) => {
    if (document.documentElement.scrollTop >= 400) {
      $("#my-picture4").fadeOut();
      $("#introduction2").fadeOut();
    } else {
      $("#my-picture4").fadeIn("slow");
      $("#introduction2").fadeIn("fast");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className="main-flex">
      <MyPicture />
      <div id={id}>
        Hi, this is developer Taehyung's webpage. Very welcome eveyone. You can
        see my works in here. If you need detail information about me please go
        to "About Me" page.
      </div>
    </div>
  );
};

export default Introduction;
