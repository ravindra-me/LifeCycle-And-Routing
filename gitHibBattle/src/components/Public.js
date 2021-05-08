import React from "react";
import Language from "./Language";
import Cart from "./Cart";
import Loder from "./Loder";

export default class Public extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      lan: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ data }));
  }

  componentDidUpdate(preProps) {
    if (preProps.len !== this.props.len) {
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.props.len}&sort=stars&order=desc&type=Repositories`
      )
        .then((data) => data.json())
        .then((data) => this.setState({ data: data }));
    }
  }

  render() {
    if (!this.state.data) {
      return <Loder />;
    }
    return (
      <div className="container grid grid-cols-4 gap-8 pt-8 pb-8">
        {this.state.data.items.map((item, index) => (
          <Cart item={item} index={index} />
        ))}
      </div>
    );
  }
}
