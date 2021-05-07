import React from "react";
import Loder from "./Loder";
import Cart from "./Cart";
import HeroNav from "./Hero";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:all&sort=stars&order=desc&type=Repositories`
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          data: data.items,
        })
      );
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.match) {
      if (this.props.match.params.id !== preProps.match.params.id) {
        fetch(
          `https://api.github.com/search/repositories?q=stars:%3E1+language:${
            this.props.language
              ? this.props.language
              : this.props.match.params.id
          }&sort=stars&order=desc&type=Repositories`
        )
          .then((data) => data.json())
          .then((data) =>
            this.setState({
              data: data.items,
            })
          );
      }
    }
  }

  render() {
    if (!this.state.data) {
      return <Loder />;
    }
    return (
      <>
        <HeroNav />
        <div className="container grid grid-cols-4 gap-8 pt-8 pb-8 flex-col">
          {this.state.data?.map((item, index) => (
            <Cart item={item} index={`${index + 1}`} />
          ))}
        </div>
      </>
    );
  }
}

export default Language;
