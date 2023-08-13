import React from "react";

class StateFullGreeting extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.greeting} {this.props.name}, I'm a statefull class
          component!
        </h1>
      </div>
    );
  }
}

export default StateFullGreeting;
