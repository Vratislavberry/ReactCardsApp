import React from "react";
import FormAddSplitCard from "../components/FormAddSplitCard";
import SplitCard from "../components/SplitCard";

function CardManager() {
  const [splitCards, setSplitCards] = React.useState(() => {
    const data = window.localStorage.getItem("MY_SPLIT_CARDS");
    return data
      ? JSON.parse(data)
      : [
          {
            title: "Tutorial",
            text: "Hello, how are you?",
          },
        ];
  });

  React.useEffect(() => {
    window.localStorage.setItem("MY_SPLIT_CARDS", JSON.stringify(splitCards));
  }, [splitCards]);

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

  function deleteSplitCard(index) {
    setSplitCards((preValue) => {
      return preValue.filter((splitCard, i) => {
        return i !== index;
      });
    });
  }

  return (
    <div>
      <FormAddSplitCard addSplitCard={addSplitCard} />
      {splitCards.map((splitCard, index) => (
        <SplitCard
          key={index}
          id={index}
          title={splitCard.title}
          text={splitCard.text}
          className={"splitCardPreview"}
          onDelete={deleteSplitCard}
        />
      ))}
    </div>
  );
}

export default CardManager;
