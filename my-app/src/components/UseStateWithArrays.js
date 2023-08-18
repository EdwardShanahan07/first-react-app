import React, { useState } from "react";

function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);

  const add = () => {
    setNums([...nums, nums.length + 1]);
  };

  return (
    <div>
      <button onClick={add}>Add Number</button>
      {nums.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </div>
  );
}

export default UseStateWithArrays;
