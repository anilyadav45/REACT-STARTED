import { useState } from "react"; // Importing useState hook

export default function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0); //this is only initialization 
  console.log(`Counter method re-rendered! and the count is ${count}`);
  //with the help of above msg we can see each re render time this counter method value increase 

  // Function to handle the increment of count
  const incrementCount = () => {
    setCount(count + 1); // Increment count
    console.log(`count value inside inc count method : ${count}`);
    //the value of count remain same after whole the counter re render it's value increase it's value is less than -1 
  };

  // Function to handle the decrement of count
  const decrementCount = () => {
    setCount(count - 1); // Decrement count
    console.log(`count value inside dec count method : ${count}`);
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
