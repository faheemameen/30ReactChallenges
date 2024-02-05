import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="bg-blue-500 p-2 rounded-md mx-2 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <div className="text-3xl my-3 inline">{count}</div>
      <button
        className="bg-blue-500 p-2 rounded-md mx-2 cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        decrement
      </button>
    </div>
  );
}

export default Counter;
