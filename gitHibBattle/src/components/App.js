import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Public from "./Public";
import "../App.css";
import Language from "./Language";
import Battel from "./Battle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      len: "all",
      dark: false,
    };
  }

  handleDark = () => {
    this.setState((preState) => ({
      dark: !preState.dark,
    }));
  };

  changeLen = (len) => {
    console.log(len);
    this.setState({
      len: len,
    });
  };

  render() {
    return (
      <>
        <div className={this.state.dark ? "dark" : ""}>
          <Header dark={this.state.dark} handleDark={this.handleDark} />
          <Route path="/" exact>
            <Language
              changeLen={this.changeLen}
              len={this.state.len}
              dark={this.state.dark}
            />
            <Public len={this.state.len} dark={this.state.dark} />
          </Route>
          <Route path="/battle">
            <Battel dark={this.state.dark} />
          </Route>
        </div>
      </>
    );
  }
}

export default App;
