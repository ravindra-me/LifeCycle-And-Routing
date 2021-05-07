import React from "react";

class BattelMain extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="container">
        <h1>Instructions</h1>
        <div className="grid grid grid-cols-4 gap-8">
          <div>
            <h3>Enter two Github users</h3>
            <div>
              <i class="lni lni-user"></i>
            </div>
          </div>
          <div>
            <h3>Enter two Github users</h3>
            <div>
              <i class="lni lni-helicopter"></i>
            </div>
          </div>
          <div>
            <h3>Enter two Github users</h3>
            <div>
              <i class="lnir lni-crown-alt-1"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BattelMain;
