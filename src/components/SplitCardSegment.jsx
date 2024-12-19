import React from "react";

function SplitCardSegment(props) {
  return (
    <button
      onClick={() => {
        props.onClick(props.id);
      }}
      className="splitCardSegment"
      style={{ backgroundColor: props.color }}
    >
      {props.text}
    </button>
  );
}

export default SplitCardSegment;
