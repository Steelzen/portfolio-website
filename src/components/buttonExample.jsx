import React from "react";
import Button from "react-bootstrap/Button";

const name = "Button Name";

const ButtonExample = () => {
  return (
    <>
      <Button href="https://google.com" variant="primary">
        Link
      </Button>
      <Button variant="warning" as="input" type="button" value={name} />
      <Button variant="secondary" as="input" type="submit" value="Submit" />
      <Button variant="success" as="input" type="reset" value="Reset" />
    </>
  );
};

export default ButtonExample;
