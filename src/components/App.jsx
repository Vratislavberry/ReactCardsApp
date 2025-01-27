import React from "react";
//import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import CardManager from "../pages/CardManager";
import Quiz from "../pages/Quiz";
import NoPage from "../pages/NoPage";
import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";

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
 */

function App() {
  return (
    <>
      <Link to="/ReactCardsApp/">Home</Link>
      <Link to="/ReactCardsApp/CardManager">Card Manager</Link>
      <Link to="/ReactCardsApp/Quiz">Quiz</Link>
      <Outlet />

      {/*
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ReactCardsApp/home" element={<Home />} />
          <Route path="/ReactCardsApp/CardManager" element={<CardManager />} />
          <Route path="/ReactCardsApp/quiz" element={<Quiz />} />
          <Route path="/ReactCardsApp/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      */}
    </>
  );
}

export default App;
