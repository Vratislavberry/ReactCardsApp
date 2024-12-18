import React from "react";
import SplitCard from "./SplitCard";

// alt + shift + f = auto-indent
function App() {
  let tempSplitCards = [
    {
      text: "ahoj, jak se máš?",
    },
    {
      text: "Jde to fajn",
    },
  ];
  const [splitCards, setSplitCards] = React.useState([]);

  return (
    <div>
      <SplitCard key="1" title="tutoriál" text="Ahoj, test 123" />
    </div>
  );
}

export default App;
