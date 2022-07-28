import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li>home</li>
        </Link>
        <Link to="/create">
          <li>Create</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
