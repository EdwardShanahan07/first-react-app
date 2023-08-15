import React, { Component } from "react";
import Message from "./Message";

class ConditionalRenderClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return <Message isLoggedIn={this.state.isLoggedIn} />;
  }
}

export default ConditionalRenderClass;
