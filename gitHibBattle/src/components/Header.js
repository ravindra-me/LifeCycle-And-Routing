import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  console.log(props.isDark);
  return (
    <div className="container">
      <header className="flex justify-between pt-4 pb-4">
        <nav>
          <ul className="flex">
            <li
              className={`${
                props.isDark.darkmode ? "text-white mr-4" : "mr-4"
              }`}
            >
              <NavLink
                to="/"
                className="text-2xl"
                activeClassName="active"
                exact
              >
                Popular
              </NavLink>
            </li>
            <li className={`${props.isDark.darkmode ? "text-white " : ""}`}>
              <NavLink
                to="/battle"
                className="text-2xl"
                activeClassName="active"
                exact
              >
                Battel
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="text-3xl" onClick={() => props.dark()}>
          {props.isDark.darkmode === true ? "💡" : "🔦"}
        </button>
      </header>
    </div>
  );
}

export default Header;
