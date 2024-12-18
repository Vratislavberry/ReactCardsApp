import React from "react";
import SplitCardSegment from "./SplitCardSegment";

function SplitCard(props) {
  // Init of textSegments hook
  const [textSegments, setTextSegments] = React.useState(
    props.text.split(" ").map((textPart, index) => {
      return { id: index, text: textPart, checked: false };
    })
  );

  console.log(textSegments);

  // Handle functions
  function handleCardSegmentClick(id) {
   const tempObject = textSegments.find((segment) => {return segment.id === id})
   tempObject.checked = !tempObject.checked;
    setTextSegments((preValue) => {
      return [
        ...preValue.filter((segment) => {
          return segment.id !== id;
        }),
        tempObject,
      ];
    });
  }

  // helper functions
  function getSpecifiedSegments(textSegments, myFilter) {
    return textSegments
      .filter(myFilter)
      .map((textSegment) => (
        <SplitCardSegment
          onClick={handleCardSegmentClick}
          key={textSegment.id}
          id={textSegment.id}
          text={textSegment.text}
          checked={textSegment.checked}
        />
      ));
  }

  return (
    <div className="splitCard">
      <h3>{props.title}</h3>
      <hr />
      <p>Odpověď: </p>
      {getSpecifiedSegments(textSegments, (textSegment) => {
        return textSegment.checked === true;
      })}

      <hr />
      <p>Výběr</p>
      {getSpecifiedSegments(textSegments, (textSegment) => {
        return textSegment.checked === false;
      })}
    </div>
  );
}

export default SplitCard;
