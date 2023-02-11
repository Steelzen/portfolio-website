import React from "react";
import Button from "react-bootstrap/Button";

const DynamicButton = (props) => {
  const { kind, ...others } = props;
  const variant = kind === "primary" ? "primary" : "warning";

  return <Button variant={variant} {...others} />;
};

export default DynamicButton;
