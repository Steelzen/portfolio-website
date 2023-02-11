import React from "react";

const AboutMe = (props) => {
  return (
    <div>
      <h1> About Me </h1>
      <h1> This is working page of developer named {props.name}</h1>
      <h2> Data from API end point</h2>
    </div>
  );
};

export default AboutMe;
