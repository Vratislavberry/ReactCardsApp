import React from "react";
import SplitCard from "./SplitCard";

function QuizUI(props) {
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
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  // update splitCards in QuizUI (not in local storage) whenever it changes 
  // (update when a cardSegment is checked, checked button is clicked, add a state saying whether a card
  // is correctly answered, incorrectly answered, not answered, or not visited)
  // 

  function updateSplitCards(SplitCardSegments) {
    setSplitCards((prevCards) => {
      return prevCards.map((card, index) => {
        if (index === currentCardIndex) {
          return {...card,  segments: [...SplitCardSegments]};
        }
        return card;
      });
    });
  }
  return (
    <div className="quiz-ui">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SplitCard
          className={"splitCardFull"}
          key={currentCardIndex}
          title={splitCards[currentCardIndex].title}
          text={splitCards[currentCardIndex].text}
          segments={splitCards[currentCardIndex].segments}
          onUpdate={updateSplitCards}
        />
      </div>

      <div className="quizNav">
        <button
          className="previousButton"
          onClick={() => setCurrentCardIndex(currentCardIndex - 1)}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>

        <button
          className="nextButton"
          onClick={() => setCurrentCardIndex(currentCardIndex + 1)}
          disabled={currentCardIndex === splitCards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizUI;
