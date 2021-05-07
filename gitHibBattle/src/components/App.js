import React from "react";
import { Route } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
      battel: false,
    };
  }

  darkMode = () => {
    this.setState((preState) => ({
      darkmode: !preState.darkmode,
    }));
  };
  battel = () => {
    this.setState((preState) => ({
      battel: !preState.battel,
    }));
  };

  render() {
    return (
      <>
        <div className={this.state.darkmode ? "dark" : ""}>
          <Header isDark={this.state} dark={this.darkMode} />
          <Main dark={this.state.darkmode} />
        </div>
      </>
    );
  }
}

export default App;
