import React from "react";

const FunctionalGreetingWithProps = (props) => {
  return (
    <h1>
      {props.greeting}, {props.name} I see you're {props.age} years old. Nice to
      meet you!
    </h1>
  );
};

export default FunctionalGreetingWithProps;
