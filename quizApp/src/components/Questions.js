import React from "react";
import Loader from "./Loader";
import QuestionPannel from "./QuestionPannel";
import Result from "./Result";
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      answer: [],
      index: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${this.props.categoryId}&difficulty=${this.props.difficulty}`
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          questions: data,
        })
      );
  }

  chageState = (an) => {
    let index = this.state.index + 1;
    this.setState((preState) => ({
      index: index,
      answer: preState.answer.concat(an),
    }));
  };

  render() {
    console.log(this.state.answer);
    if (!this.state.questions) {
      return <Loader />;
    }

    return (
      <>
        {this.state.index < 10 ? (
          <QuestionPannel
            questions={this.state.questions.results[this.state.index]}
            chageState={this.chageState}
            index={this.state.index}
          />
        ) : (
          <Result
            questions={this.state.questions.results}
            result={this.state.answer}
          />
        )}
      </>
    );
  }
}

export default Questions;
