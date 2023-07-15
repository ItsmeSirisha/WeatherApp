import React from "react";
function Empty(props) {
  console.log(props.text);
  return <p>{props.text}</p>;
}

export default Empty;
