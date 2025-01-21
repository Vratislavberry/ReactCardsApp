import React from "react";
import SplitCard from "./SplitCard";
import FormQuizSetup from "./FormQuizSetup";
import QuizBar from "./QuizBar";

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
  const [QuizSetupData, setQuizSetupData] = React.useState({});

  function handleQuizSetup(data) {
    setQuizSetupData({ ...data });
  }

  function updateSplitCards(SplitCardSegments, SplitCardState) {
    setSplitCards((prevCards) => {
      return prevCards.map((card, index) => {
        if (index === currentCardIndex) {
          return {
            ...card,
            segments: [...SplitCardSegments],
            state: SplitCardState,
          };
        }
        return card;
      });
    });
  }

  function SplitCardUI() {
    return (
      <div id="splitCardUI">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SplitCard
            className={"splitCardFull"}
            key={currentCardIndex}
            title={splitCards[currentCardIndex].title}
            text={splitCards[currentCardIndex].text}
            segments={splitCards[currentCardIndex].segments}
            onUpdate={updateSplitCards}
            state={splitCards[currentCardIndex].state}
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

  return (
    <div className="quiz-ui">
      {QuizSetupData.start ? (
        <div>
          <QuizBar
            cards={splitCards}
            onBarButtonLinkClick={(newIndex) => {
              setCurrentCardIndex(newIndex);
            }}
          />
          {SplitCardUI()}
        </div>
      ) : (
        <FormQuizSetup onSubmit={handleQuizSetup} />
      )}
    </div>
  );
}

export default QuizUI;
