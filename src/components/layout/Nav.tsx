import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="">Home</Link>&nbsp;
        <Link to="about">About</Link>&nbsp;
      </nav>
    </div>
  );
}

export default Nav;
