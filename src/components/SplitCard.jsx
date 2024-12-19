import React from "react";
import SplitCardSegment from "./SplitCardSegment";

function SplitCard(props) {
  // Init of hooks
  const [textSegments, setTextSegments] = React.useState(
    shuffle(
      props.text.split(" ").map((textPart, index) => {
        return { id: index, text: textPart, checked: false, color: "white" };
      })
    )
  );

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

    // States whether the order of the segments is correct (true or false)
    const [correctResult, setCorrectResult] = React.useState(null);

    // Handle functions
    function handleCardSegmentClick(id) {
      const tempObject = textSegments.find((segment) => {
        return segment.id === id;
      });
      tempObject.checked = !tempObject.checked;
      setTextSegments((preValue) => {
        return [
          ...preValue.filter((segment) => {
            return segment.id !== id;
          }),
          tempObject,
        ];
      });
      // Change color of the segment to white when the user unchecks it
      if (tempObject.checked === false) {
        tempObject.color = "white";
      }

      setCorrectResult(null);
    }

    // handles click on the check button
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
        <div className="checkButtonContainer">
          <button onClick={handleCheck}>Check</button>
        </div>
        <div className="message">
          {correctResult === true && (
            <p style={{ color: "green" }}>Máš to dobře</p>
          )}
          {correctResult === false && (
            <p style={{ color: "red" }}>Máš to špatně</p>
          )}
        </div>
      </div>
    );
  }

export default SplitCard;
