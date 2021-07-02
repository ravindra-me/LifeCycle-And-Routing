import React from "react";
import Loader from "./Loader";
import Questions from "./Questions";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      categoryId: 9,
      difficulty: "easy",
      isQuestion: false,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          category: data.trivia_categories,
        })
      );
  }

  render() {
    let lables = ["easy", "medium", "hard"];
    if (!this.state.category) {
      return <Loader />;
    }
    return (
      <section>
        <div className="container">
          {this.state.isQuestion === false ? (
            <div>
              <h1 className="text-4xl mt-12 text-center ">Quiz App</h1>
              <p className="text-center mt-4 font-bold  ">
                {" "}
                Click on Any category and lable based on your requirement{" "}
              </p>
              <ul className="grid grid-cols-3 mt-8">
                {this.state.category.map((e) => (
                  <li
                    className={`bg-gray-300  m-4 rounded-xl hover:bg-gray-700 hover:text-white  font-semibold ${
                      this.state.categoryId === e.id ? "active" : ""
                    }`}
                    onClick={() =>
                      this.setState({
                        categoryId: e.id,
                      })
                    }
                  >
                    <p className="p-4">{e.name}</p>
                  </li>
                ))}
              </ul>
              <div className="p-4 text-center">
                <h1 className="text-4xl text-center mb-8">
                  {" "}
                  Select Questions Lable
                </h1>
                <ul className="flex ">
                  {lables.map((lable) => (
                    <li
                      className={`mr-4 hover:bg-gray-700 hover:text-white bg-gray-300	rounded-xl ${
                        this.state.difficulty === lable ? "active" : ""
                      }`}
                      onClick={() =>
                        this.setState({
                          difficulty: lable,
                        })
                      }
                    >
                      <p className="px-2 py-4">{lable}</p>
                    </li>
                  ))}
                </ul>
                <p
                  onClick={() =>
                    this.setState((preState) => ({
                      isQuestion: !preState.isQuestion,
                    }))
                  }
                  className="mt-8 bg-gray-700	hover:bg-gray-300 px-8 py-4 rounded-xl text-white hover:text-black "
                >
                  {" "}
                  Start Quiz{" "}
                </p>
              </div>
            </div>
          ) : (
            <Questions
              categoryId={this.state.categoryId}
              difficulty={this.state.difficulty}
            />
          )}
        </div>
      </section>
    );
  }
}
