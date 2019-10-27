import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">Click an image to begin!</li>
        {/* Import score variables, then use JSX variables*/}
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default Navbar;
