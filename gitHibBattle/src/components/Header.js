import React from "react";
import { NavLink } from "react-router-dom";
import data from "./data.json";

function Header(props) {
  return (
    <div className="container">
      <header className="flex justify-between pt-4 pb-4">
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <NavLink to="/" className="text-2xl" activeClassName="active">
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/battel"
                className="text-2xl"
                activeClassName="active"
              >
                Battel
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="text-3xl">{props.darkMode ? "💡" : "🔦"}</button>
      </header>
      <div className="pt-8 pb-8">
        <ul className="flex justify-center items-center">
          {data.map((e) => {
            console.log(Object.keys(e)[0]);
            return (
              <li className="ml-2 mr-2">
                {Object.keys(e)[0] === "/" ? (
                  <NavLink
                    to={`${Object.keys(e)[0]}`}
                    className="text-2xl"
                    activeClassName="active"
                    exact
                  >
                    {`${Object.values(e)[0]}`}
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/path/${Object.keys(e)[0]}`}
                    className="text-2xl"
                    activeClassName="active"
                  >
                    {`${Object.values(e)[0]}`}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
