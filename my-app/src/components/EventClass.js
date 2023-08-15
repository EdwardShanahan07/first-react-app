import React, { Component } from "react";

class EventClass extends Component {
  clickHandler() {
    console.log("Event Class");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler()}>Click Class</button>
      </div>
    );
  }
}

export default EventClass;
