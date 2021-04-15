import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>
          Board
        </h1>
      </Link>
    </header>
  );
}

export default Header;
