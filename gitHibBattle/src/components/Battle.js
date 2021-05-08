import React from "react";
import Instruction from "./Instruction";
import Avatar from "./Avatar";
import BattlePlayer from "./BattlePlayer";
export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null,
      player1Data: null,
      player2Data: null,
      battle: false,
    };
  }

  handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "player1") {
      this.setState({
        player1: event.target.value,
      });
    } else if (event.target.name === "player2") {
      this.setState({
        player2: event.target.value,
      });
    }
  };

  handleSubmitOne = (event) => {
    event.preventDefault();
    console.log("one");
    fetch(`https://api.github.com/users/${this.state.player1}`)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          player1Data: data,
        })
      );
  };

  handleSubmitTwo = (event) => {
    event.preventDefault();
    console.log("Two");
    fetch(`https://api.github.com/users/${this.state.player2}`)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          player2Data: data,
        })
      );
  };

  handleCancle = (player) => {
    return player === "playerData1"
      ? this.setState({
          player1Data: null,
          player1: "",
        })
      : this.setState({
          player2Data: null,
          player2: "",
        });
  };

  showBattle = () => {
    this.setState((preState) => ({
      battle: !preState.battle,
    }));
  };

  resetBattle = () => {
    this.setState({
      player1: null,
      player2: null,
      player1Data: null,
      player2Data: null,
      battle: false,
    });
  };

  render() {
    return (
      <section>
        <div
          className={
            this.props.dark ? " container dark text-white " : "container"
          }
        >
          {this.state.battle ? (
            <BattlePlayer
              player1={this.state.player1Data}
              player2={this.state.player2Data}
              resetBattle={this.resetBattle}
            />
          ) : (
            <div>
              <Instruction />
              <h1 className="text-4xl text-center mb-8 mt-16">Players</h1>
              <div className="flex justify-between items-center">
                {this.state.player1Data === null ? (
                  <form action="" onSubmit={this.handleSubmitOne}>
                    <label for="">Player One</label>
                    <div>
                      <input
                        type="text"
                        name="player1"
                        placeholder="github username"
                        value={this.state.player1}
                        onChange={this.handleChange}
                        className="form-control p-2"
                      />
                      <button
                        type="submit"
                        className="bg-gray-300 p-2 form-control  ml-4"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <Avatar
                    playerData1={this.state.player1Data}
                    handleClear={this.handleCancle}
                  />
                )}

                {this.state.player2Data === null ? (
                  <form action="" onSubmit={this.handleSubmitTwo}>
                    <label for="">Player Two</label>
                    <div>
                      <input
                        type="text"
                        name="player2"
                        placeholder="github username"
                        value={this.state.player2}
                        onChange={this.handleChange}
                        className="form-control p-2"
                      />
                      <button
                        type="submit"
                        className="bg-gray-300 p-2 form-control ml-4"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <Avatar
                    playerData2={this.state.player2Data}
                    handleClear={this.handleCancle}
                  />
                )}
              </div>
              {this.state.player1Data && this.state.player2Data ? (
                <div className="text-center">
                  <button className="btn" onClick={this.showBattle}>
                    Battel
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}
