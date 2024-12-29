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

  return (
    <div className="quiz-ui">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SplitCard
          className={"splitCardFull"}
          key={currentCardIndex}
          title={splitCards[currentCardIndex].title}
          text={splitCards[currentCardIndex].text}
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
