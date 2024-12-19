import React from "react";
import SplitCard from "./SplitCard";
import FormAddSplitCard from "./FormAddSplitCard";

// alt + shift + f = auto-indent
/** Ideas
 *  Change color on SplitCardSegments when the user checks their solution
 *    red for incorrect, green for correct.
 *
 *  Add required to the input fields in FormAddSplitCard
 *  
 *  textSegments is a hook but I modify its elements directly, figure out if its a problem
 *  Add retry button and state. When Check button is pressed, disable all buttons until user pressed retry button
 *  which unchecks all buttons.
 */

function App() {
  const [splitCards, setSplitCards] = React.useState([
    {
      title: "Tutorial",
      text: "ahoj, jak se máš?",
    },
  ]);

  function addSplitCard(newCard) {
    if (newCard.title == "" || newCard.text == "") {
      alert("Please fill out both fields");
      return;
    } else {
      setSplitCards((preValue) => {
        return [...preValue, newCard];
      });
    }
  }

  return (
    <div>
      <FormAddSplitCard addSplitCard={addSplitCard} />
      {splitCards.map((splitCard, index) => (
        <SplitCard key={index} title={splitCard.title} text={splitCard.text} />
      ))}
    </div>
  );
}

export default App;
