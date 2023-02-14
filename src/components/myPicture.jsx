import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import profilePhoto from "../image/Profile_photo.jpeg";

const MyPicture = (props) => {
  const [id] = useState(_uniqueId("my-picture"));

  return (
    <div id={id}>
      <img
        src={profilePhoto}
        className="rounded-circle"
        alt="profile-photo"
      ></img>
    </div>
  );
};

export default MyPicture;
