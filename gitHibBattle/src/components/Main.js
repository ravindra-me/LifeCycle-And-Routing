import React from "react";
import { Route } from "react-router-dom";
import Language from "./Language";

class Main extends React.Component {
  render() {
    return (
      <div className="container grid grid-cols-4 gap-8 pt-8 pb-8">
        <Route path="/" exact>
          <Language language={"all"} />
        </Route>
        <Route path="/path/:id" component={Language} />
      </div>
    );
  }
}

export default Main;
