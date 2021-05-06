import React from "react";
import Loder from "./Loder";
import Cart from "./Cart";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("helo");
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${
        this.props.language ? this.props.language : this.props.match.params.id
      }&sort=stars&order=desc&type=Repositories`
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          data: data.items,
        })
      );
  }

  render() {
    if (this.state.data.length < 0) {
      return <Loder />;
    }
    return (
      <>
        {this.state.data?.map((item, index) => (
          <Cart item={item} index={`${index + 1}`} />
        ))}
      </>
    );
  }
}

export default Language;
