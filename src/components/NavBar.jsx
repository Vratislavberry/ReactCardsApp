import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/ReactCardsApp/">Home</Link>
      <Link to="/ReactCardsApp/CardManager">Card Manager</Link>
      <Link to="/ReactCardsApp/Quiz">Quiz</Link>
      <Outlet />
    </div>
  );
}

export default NavBar;
