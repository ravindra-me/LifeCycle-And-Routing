import React from "react";
import { NavLink } from "react-router-dom";
import data from "./data.json";
function HeroNav(props) {
  console.log(props.dark);
  return (
    <div className="pt-8 pb-8">
      <ul className="flex justify-center items-center">
        {data.map((e) => {
          return (
            <li
              className={`${
                props.dark === true ? "text-white ml-2 mr-2" : "ml-2 mr-2"
              }`}
            >
              <NavLink
                to={`/path/${Object.keys(e)[0]}`}
                className="text-2xl"
                activeClassName="active"
                exact
              >
                {`${Object.values(e)[0]}`}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HeroNav;
