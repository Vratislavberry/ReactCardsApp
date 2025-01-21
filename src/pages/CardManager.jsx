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

  const [editCardIndex, setEditCardIndex] = React.useState(null);

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

  function insertSplitCard(newCard) {
    if (newCard.title == "" || newCard.text == "") {
      alert("Please fill out both fields");
      return;
    } else {
      setSplitCards(splitCards.map((card, index) => {
        if (index === editCardIndex){
          return newCard
        }
        else {
          return card
        }
      }));
    }

    setEditCardIndex(null);
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
      {splitCards.map((splitCard, index) => {
        return index !== editCardIndex ? (
          <SplitCard
            key={index}
            id={index}
            title={splitCard.title}
            text={splitCard.text}
            className={"splitCardPreview"}
            onDelete={deleteSplitCard}
            onEdit={() => setEditCardIndex(index)}
          />
        ) : (
          <FormAddSplitCard
            addSplitCard={insertSplitCard}
            title={splitCard.title}
            text={splitCard.text}
            ClassName="splitCardPreview"
          />
        );
      })}
    </div>
  );
}

export default CardManager;
