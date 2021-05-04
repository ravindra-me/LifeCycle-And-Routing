import "../App.css";
import React from "react";
import StopWatch from "./StopWatch";
import { Countdown } from "./Counter";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStopWatch: false,
      showCountDown: false,
    };
  }

  handleClose = (key) => {
    this.setState({
      [key]: false,
    });
  };

  render() {
    return (
      <div className="container ">
        <h1 className="text-center text-4xl	pt-4">Timers</h1>
        <div className="flex justify-center items-center  mt-32">
          {this.state.showStopWatch ? (
            <StopWatch close={this.handleClose} />
          ) : (
            <button
              className="block bg-gray-700 p-4 text-white rounded-lg mr-4"
              onClick={() =>
                this.setState((preState) => ({
                  showStopWatch: !preState.showStopWatch,
                }))
              }
            >
              show Stopwatch
            </button>
          )}
          {this.state.showCountDown ? (
            <Countdown close={this.handleClose} />
          ) : (
            <button
              className="block bg-gray-700 p-4 text-white rounded-lg ml-4"
              onClick={() =>
                this.setState((preState) => ({
                  showCountDown: !preState.showCountDown,
                }))
              }
            >
              Show Countwatch
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
