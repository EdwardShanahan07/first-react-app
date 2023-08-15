import React from "react";

function Message(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Sign in</h1>}
    </div>
  );
}

export default Message;
