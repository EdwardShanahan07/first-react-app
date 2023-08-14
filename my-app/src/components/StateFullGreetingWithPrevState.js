import React from "react";

class StateFullGreetingWithPrevState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      return {
        introduction:
          prevState.introduction === "Hello!" ? "GoodBye!" : "Hello!",
        buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
      };
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>

        <p>You click this button {this.state.count} times</p>

        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default StateFullGreetingWithPrevState;
