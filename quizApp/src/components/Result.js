import React from "react";
import { NavLink } from "react-router-dom";
import Questions from "./Questions";
export default function Result(props) {
  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-red-500 text-bold text-2xl ">
          Result of the quiz.
        </h1>
        <NavLink to="/result" className="py-2 px-4  rounded">
          Retake this quiz
        </NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>You Selected</th>
            <th>Right Or Wrong</th>
          </tr>
        </thead>
        <tbody>
          {props.questions.map((elem, i) => {
            return (
              <tr>
                <td>{elem.question}</td>
                <td>{elem.correct_answer} </td>
                <td>{props.result[i]}</td>
                <td>
                  {elem.correct_answer === props.result[i] ? (
                    <svg
                      width="24"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="#38A169"
                      viewBox="0 0 24 24"
                      class="icon"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ) : (
                    <svg
                      fill="none"
                      width="24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="#E53E3E"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
