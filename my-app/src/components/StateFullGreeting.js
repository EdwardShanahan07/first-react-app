import React from "react";

class StateFullGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
    };
  }

  handleClick() {
    this.setState({
      introduction: "GoodBye!",
      buttonText: "Enter",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default StateFullGreeting;
