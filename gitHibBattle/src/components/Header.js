import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="container">
      <header className="flex justify-between pt-4 pb-4">
        <nav>
          <ul className={props.dark ? "flex text-white" : "flex"}>
            <li className="mr-4">
              <NavLink
                to="/"
                className="text-2xl"
                activeClassName="active"
                exact
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/battle"
                className="text-2xl"
                activeClassName="active"
                exact
              >
                Battle
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="text-3xl" onClick={() => props.handleDark()}>
          {props.dark === true ? "💡" : "🔦"}
        </button>
      </header>
    </div>
  );
}

export default Header;
