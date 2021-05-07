import React from "react";
import { Route, Switch } from "react-router-dom";
import Language from "./Language";
import HeroNav from "./Hero";
import BattelMain from "./BattelMain";
class Main extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <Route path="/" exact>
          <Route path="/path/:id" component={Language} exact />
        </Route>
        <Route path="/battle">
          <BattelMain />
        </Route>
      </>
    );
  }
}

export default Main;
