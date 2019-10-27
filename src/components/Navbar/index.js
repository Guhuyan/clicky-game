import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">Click an image to begin!</li>
        {/* Import score variables, then use JSX variables*/}
        <li>
          Score: {props.score || "0"} | Top Score: {props.topScore || "0"}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
