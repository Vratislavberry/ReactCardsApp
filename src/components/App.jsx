import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CardManager from "../pages/CardManager";
import Quiz from "../pages/Quiz";
import NoPage from "../pages/NoPage";
import NavBar from "./NavBar";


// alt + shift + f = auto-indent
/** Ideas for improvement:
 *
 *  After a SplitCard is checked, when SplitCardSegment is clicked, 
 *  make all SplitCardSegments unchecked
 * 
 * Make CRUD operations for cards
 *    Add a button to remove a card
 *    Add a button to edit a card
 *
 *  Make more web pages
 *    Home page
 *    Manage cards page
 *        Make more types of cards (one correct answer, multiple correct answers, etc.)
 *    Take test from deck of Cards page (including filtering of which cards I want)
 *    login page (when I connect it to a database)
 *    Should I use Express.js ?
 *
 *  Add retry button and state. When Check button is pressed, disable 
 *  all buttons until user pressed retry button which unchecks all buttons.
 *
 *  Style webpage with Bootstrap
 * 
 * 
 *  Add a session (local storage) to save cards among multiple pages and page refreshes
 *  
 *
 */

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CardManager" element={<CardManager />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
