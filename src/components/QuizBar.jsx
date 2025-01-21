import React from "react";
import BarButtonLink from "./BarButtonLink";

function QuizBar(props) {
  return (
    <div>
      {props.cards.map((card, index) => (
        <BarButtonLink key={index} id={index} state={card.state} onClick={props.onBarButtonLinkClick}/>
      ))}
    </div>
  );
}

export default QuizBar;
