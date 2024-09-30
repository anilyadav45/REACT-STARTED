import { useState } from "react"; // Importing useState hook

export default function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle the increment of count
  const incrementCount = () => {
    setCount(count + 1); // Increment count
  };

  // Function to handle the decrement of count
  const decrementCount = () => {
    setCount(count - 1); // Decrement count
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Simple Counter</h1>
        <p>Current Count: {count}</p>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}
