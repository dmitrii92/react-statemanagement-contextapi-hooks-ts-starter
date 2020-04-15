import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/create">Create new</Link>
      </li>
      <li>
        <Link to="/view">Show list</Link>
      </li>
    </ul>
  </nav>
}