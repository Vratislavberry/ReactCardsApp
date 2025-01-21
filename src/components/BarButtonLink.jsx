import React from "react";

function BarButtonLink(props) {
  let stateColors = {
    true: "green",
    false: "red",
    undefined: "white",
    null: "grey",
  };

  return (
    <button
      id={props.id}
      className="bar-button"
      style={{ backgroundColor: stateColors[props.state] }}
      onClick={() => {props.onClick(props.id)}}
    ></button>
  );
}

export default BarButtonLink;
