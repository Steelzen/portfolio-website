import React, { useState } from "react";
import ButtonExample from "./buttonExample";
import PropExample from "./propExample";
import DynamicButton from "./dynamicButton";
import NumberList from "./mappingExample";
import EssayForm from "./formExample";
import Calculator from "../examples/Calculator";

const Tools = () => {
  return (
    <div>
      <ButtonExample />
      <PropExample name="Taehyung" />
      <DynamicButton kind="primary" onClick={() => console.log("clicked!")}>
        Click
      </DynamicButton>
      <DynamicButton kind="w" onClick={() => console.log("clicked!")}>
        Click
      </DynamicButton>
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <EssayForm />
      <Calculator />
    </div>
  );
};

export default Tools;
