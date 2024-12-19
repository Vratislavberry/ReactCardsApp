import React from "react";
import SplitCard from "./SplitCard";
import FormAddSplitCard from "./FormAddSplitCard";

// alt + shift + f = auto-indent
/** Ideas for improvement:
 * 
 * Make CRUD operations for cards 
 *    Add a button to remove a card
 *    Add a button to edit a card
 * 
 *  Make more web pages
 *    Home page
 *    Manage cards page
 *        Make more types of cards (one correct answer, multiple correct answers, etc.)
 *    Take test from deck of Cards page (including filtering of which card I want)
 *    login page (when I connect it to a database)
 *    Should I use Express.js ?
 * 
 *  Add retry button and state. When Check button is pressed, disable all buttons until user pressed retry button
 *  which unchecks all buttons.
 * 
 *  Style webpage with Bootstrap
 * 
 */

function App() {
  const [splitCards, setSplitCards] = React.useState([
    {
      title: "Tutorial",
      text: "Hello, how are you?",
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
