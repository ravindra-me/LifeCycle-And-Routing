import React from "react";
export default function ProgressBar(props) {
  let width = +props.index * 10;
  return (
    <>
      <div className=" mt-16 ">
        <p className="mb-2">Questions: {props.index}/10</p>
        <div className="h-2 bg-gray-200 rounded ">
          <div
            className="h-2 bg-green-700 rounded"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
