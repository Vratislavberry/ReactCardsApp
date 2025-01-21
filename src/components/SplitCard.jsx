import React from "react";
import SplitCardSegment from "./SplitCardSegment";

function SplitCard(props) {
  // Init of hooks
  const [textSegments, setTextSegments] = React.useState(
    props.segments !== undefined
      ? props.segments
      : shuffle(
          props.text.split(" ").map((textPart, index) => {
            return {
              id: index,
              text: textPart,
              checked: false,
              color: "white",
            };
          })
        )
  );

  // States whether the order of the segments is correct (true,
  // false or null when checked button has not been pressed yet)
  const [correctResult, setCorrectResult] = React.useState(
    props.state != undefined ? props.state : null
  );

  React.useEffect(() => {
    if (props.onUpdate !== undefined) {
      props.onUpdate(textSegments, correctResult);
    }
  }, [textSegments, correctResult]);

  // Changes one element of the textSegments array without mutating the original array
  function changeTextSegmentsElement(id, newObject) {
    setTextSegments((preValue) => {
      return preValue.map((textSegment, index) => {
        if (index === id) {
          return { ...textSegment, ...newObject };
        }
        return textSegment;
      });
    });
  }

  /***** Handle functions *****/
  // handles click on the card segment
  // Un/checks the card segment with given id
  function handleCardSegmentClick(id) {
    const tempObject = textSegments.find((segment) => {
      return segment.id === id;
    });
    tempObject.checked = !tempObject.checked;
    // Change color of the segment to white when the user unchecks it
    if (tempObject.checked === false) {
      tempObject.color = "white";
    }
    setTextSegments((preValue) => {
      return [
        ...preValue.filter((segment) => {
          return segment.id !== id;
        }),
        tempObject,
      ];
    });
    /*
    // Change color of the segment to white when the user unchecks it
    if (tempObject.checked === false) {
      tempObject.color = "white";
    }
    */

    setCorrectResult(null);
  }

  // handles click on the check button
  // sets correctResult to true if all segments are checked and in correct order
  function handleCheck() {
    // change color of all incorrect segments to red and correct to green
    let iOfCheckedSegments = 0;
    for (let i = 0; i < textSegments.length; i++) {
      if (textSegments[i].checked === false) {
        continue;
      }
      if (textSegments[i].id === iOfCheckedSegments) {
        iOfCheckedSegments++;
        changeTextSegmentsElement(i, { color: "green" });
      } else {
        iOfCheckedSegments++;
        changeTextSegmentsElement(i, { color: "red" });
      }
    }

    // check if all segments are checked and in correct order
    for (let i = 0; i < textSegments.length; i++) {
      if (textSegments[i].id !== i || textSegments[i].checked !== true) {
        setCorrectResult(false);
        return;
      }
    }
    setCorrectResult(true);
  }

  /***** helper functions *****/
  // returns array of SplitCardSegments that satisfy given filter function
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
          color={textSegment.color}
        />
      ));
  }

  // randomly shuffles given array of objects
  function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = { ...array[i] };
      array[i] = { ...array[j] };
      array[j] = { ...temp };
    }
    return array;
  }

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <hr />
      <p>Result: </p>
      {getSpecifiedSegments(textSegments, (textSegment) => {
        return textSegment.checked === true;
      })}

      <hr />
      <p>Options: </p>
      {getSpecifiedSegments(textSegments, (textSegment) => {
        return textSegment.checked === false;
      })}

      <div className="checkButtonContainer">
        <button onClick={handleCheck}>Check</button>
      </div>
      <div className="message">
        {correctResult === true && (
          <p style={{ color: "green" }}>You are right!</p>
        )}
        {correctResult === false && (
          <p style={{ color: "red" }}>You are incorrect</p>
        )}
      </div>
    </div>
  );
}

export default SplitCard;
