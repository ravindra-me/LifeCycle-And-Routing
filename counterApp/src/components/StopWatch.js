import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerTime: 0,
      timerStart: 0,
      millisecond: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    this.timer = null;
  }

  startTime = () => {
    this.setState((preState) => ({
      timerOn: !preState.timerOn,
    }));
    this.startCount();
  };

  startCount = () => {
    this.timer = setInterval(() => {
      let { millisecond, seconds, minutes, hours } = this.state;
      millisecond += 10;
      if (millisecond === 100) {
        millisecond = 0;
        seconds += 1;
      } else if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      } else if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
      this.setState({
        millisecond: millisecond,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
      });
      //   this.getTimerTime(
      //     this.state.millisecond,
      //     this.state.seconds,
      //     this.state.minutes,
      //     this.state.hours
      //   );
    }, 100);
  };

  stopTimer = () => {
    this.setState({
      timerOn: false,
    });
    clearInterval(this.timer);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  reset = () => {
    this.setState({
      timerOn: false,
      timerTime: 0,
      timerStart: 0,
      millisecond: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  };

  getTimerTime = (millisecond, seconds, minutes, hours) => {
    millisecond += 10;
    if (millisecond === 100) {
      millisecond = 0;
      seconds += 1;
    } else if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    } else if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
    this.setState({
      millisecond: millisecond,
      seconds: seconds,
      minutes: minutes,
      hours: 0,
    });
  };

  render() {
    const { millisecond, seconds, minutes, hours } = this.state;

    return (
      <div className="width-20 p-4 relative">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center text-4xl">Stop Watch</h1>
          <div className="flex justify-center items-center text-4xl mt-4">
            {hours < 10 ? "0" + hours : hours} :{" "}
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds} :
            {millisecond < 10 ? "0" + millisecond : millisecond}
          </div>
          {this.state.timerOn === false &&
            this.state.seconds === 0 &&
            this.state.millisecond === 0 && (
              <button
                className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md"
                onClick={this.startTime}
              >
                Start
              </button>
            )}
          {this.state.timerOn === true && (
            <button
              className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md"
              onClick={this.stopTimer}
            >
              Stop
            </button>
          )}

          <div className="flex items-center">
            {this.millisecond !== 0 && this.state.timerOn === false && (
              <button
                className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md mr-4"
                onClick={this.startTime}
              >
                Reasume
              </button>
            )}

            {this.millisecond !== 0 && this.state.timerOn === false && (
              <button
                className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md ml-4"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
          </div>
        </div>
        <h3
          className="absolute -top-1 -right-0 text-xl closeBtn"
          onClick={() => this.props.close("showStopWatch")}
        >
          X
        </h3>
      </div>
    );
  }
}

// class StopWatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timerOn: false,
//       timerStart: 0,
//       timerTime: 0,
//     };
//   }

//   startTimer = () => {
//     this.setState({
//       timerOn: true,
//       timerTime: this.state.timerTime,
//       timerStart: Date.now() - this.state.timerTime,
//     });
//     this.timer = setInterval(() => {
//       this.setState({
//         timerTime: Date.now() - this.state.timerStart,
//       });
//     }, 10);
//   };

//   stopTimer = () => {
//     this.setState({ timerOn: false });
//     clearInterval(this.timer);
//   };

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   resetTimer = () => {
//     this.setState({
//       timerStart: 0,
//       timerTime: 0,
//     });
//   };

//   render() {
//     const { timerTime } = this.state;
//     let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
//     let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
//     let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
//     let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
//     return (
//       <div className="width-20 p-4 relative">
//         <div className="flex justify-center items-center flex-col">
//           <h1 className="text-center text-4xl">Stop Watch</h1>
//           <div className="flex justify-center items-center text-4xl mt-4">
//             {hours} : {minutes} : {seconds} : {centiseconds}
//           </div>
//           {this.state.timerOn === false && this.state.timerTime === 0 && (
//             <button
//               className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md"
//               onClick={this.startTimer}
//             >
//               Start
//             </button>
//           )}
//           {this.state.timerOn === true && (
//             <button
//               className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md"
//               onClick={this.stopTimer}
//             >
//               Stop
//             </button>
//           )}

//           <div className="flex items-center">
//             {this.state.timerOn === false && this.state.timerTime > 0 && (
//               <button
//                 className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md mr-4"
//                 onClick={this.startTimer}
//               >
//                 Reasume
//               </button>
//             )}

//             {this.state.timerOn === false && this.state.timerTime > 0 && (
//               <button
//                 className="block bg-gray-400 p-2 pl-4 pr-4 mt-4 rounded-md ml-4"
//                 onClick={this.resetTimer}
//               >
//                 Reset
//               </button>
//             )}
//           </div>
//         </div>
//         <h3
//           className="absolute -top-1 -right-0 text-xl closeBtn"
//           onClick={() => this.props.close("showStopWatch")}
//         >
//           X
//         </h3>
//       </div>
//     );
//   }
// }

export default StopWatch;
