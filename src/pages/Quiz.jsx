import React from "react";
import FormAddSplitCard from "../components/FormAddSplitCard";
import SplitCard from "../components/SplitCard";

function Quiz() {
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

export default Quiz;
