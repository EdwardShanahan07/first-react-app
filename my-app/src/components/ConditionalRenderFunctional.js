import React from "react";

function ConditionalRenderFunctional(props) {
  return (
    <div>
      <h1>{props.isLoggedIn ? "Welcome" : "Sign Up"}</h1>
    </div>
  );
}

export default ConditionalRenderFunctional;
