import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return <nav>
    <ul>
      <li>
        <Link to="/">Show list</Link>
      </li>
      <li>
        <Link to="/create">Create new</Link>
      </li>
    </ul>
  </nav>
}