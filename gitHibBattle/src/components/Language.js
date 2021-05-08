import React from "react";

function Language(props) {
  let data = ["all", "javascript", "css", "ruby", "python"];
  return (
    <div className="pt-8 pb-8">
      <ul
        className={
          props.dark
            ? "text-white flex justify-center items-center"
            : "flex justify-center items-center"
        }
      >
        {data.map((e) => {
          return (
            <li className="ml-2 mr-2">
              <p
                className={props.len === e ? "active text-2xl" : "text-2xl"}
                onClick={() => props.changeLen(e)}
              >
                {e}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Language;
