import React from "react";

function SplitCardSegment(props) {
  return (
    <button
      onClick={() => {
        props.onClick(props.id);
      }}
      className="splitCardSegment"
    >
      {props.text}
    </button>
  );
}

export default SplitCardSegment;
