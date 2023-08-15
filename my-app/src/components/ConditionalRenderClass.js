import React, { Component } from "react";

class ConditionalRenderClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1>Welcome User</h1>
        ) : (
          <h1>Please Sign in</h1>
        )}
      </div>
    );
  }
}

export default ConditionalRenderClass;
