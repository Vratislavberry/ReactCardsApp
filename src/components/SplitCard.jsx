import React from "react";
import SplitCardSegment from "./SplitCardSegment";

// divides given text into buttons
function SplitCard(props) {
  return (
    <div className="splitCard">
      <p>{props.title}</p>
      <hr />
      {props.text.split(" ").map((textSegment, index) => (
        <SplitCardSegment key={index} id={index} text={textSegment} />
      ))}
    </div>
  );
}

export default SplitCard;
