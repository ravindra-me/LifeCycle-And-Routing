import "../App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";
import { Home } from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      navClosed: false,
    };
  }
  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };
  render() {
    return (
      <>
        <Header changeNavbar={this.changeNavbar} />
        <div className="flex align-center">
          <Sidebar />
          <Main />
        </div>
      </>
    );
  }
}

export default App;
