import React from "react";

function EventFunctional() {
  function clickHandler() {
    console.log("Functional Component!");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click Functional</button>
    </div>
  );
}

export default EventFunctional;
