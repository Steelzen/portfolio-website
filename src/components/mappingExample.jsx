import React from "react";

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul style={{ listStyle: "none" }}>{listItems}</ul>;
};

export default NumberList;
