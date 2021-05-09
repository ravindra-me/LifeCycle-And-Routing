import React from "react";
import ProgressBar from "./ProgressBar";

export default class QuestionPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
    };
  }
  render() {
    let answer = [
      this.props.questions.correct_answer,
      ...this.props.questions.incorrect_answers,
    ];
    console.log(answer);
    return (
      <>
        <div className="question-panal">
          <ProgressBar index={this.props.index + 1} />
          <div className="mt-16">
            <h1 className="text-4xl ">{this.props.questions["question"]}</h1>
            <div className="mt-8">
              {answer.map((e) => (
                <p
                  className={`p-4 cursor-pointer mt-4 border-2	border-indigo-400	rounded-md	hover:bg-indigo-200	${
                    this.state.answer === e ? "active" : ""
                  }`}
                  onClick={() => this.setState({ answer: e })}
                >
                  {e}
                </p>
              ))}
            </div>
            <div className="mt-4 text-right">
              <button
                className="bg-green-500 py-3 px-8 rounded-md"
                onClick={() => this.props.chageState(this.state.answer)}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
