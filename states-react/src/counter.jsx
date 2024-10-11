import { useState } from "react"; // Importing useState hook

const init = () =>{
  console.log("state is initialized with random value");
  return Math.random();
}

export default function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(init); //this is only initialization
  // console.log(`Counter method re-rendered! and the count is ${count}`);
  //with the help of above msg we can see each re render time this counter method value increase

  // Function to handle the increment of count
  const incrementCount = () => {
    //1st time
    setCount((updateCount) => {
      return updateCount + 1;
    });
    //2nd times
    setCount((updateCount) => {
      return updateCount + 1;
    });
    //3rd times
    setCount((updateCount) => {
      return updateCount + 1;
    });
  };
  //now asynchly it will execute on by one all so +1 +1 +1 it will increment 3 i know it is simple to increment by previous concept but we're learning  this for other purpose
  //you can see in decrement it will only decrement by -1 because we haven't followed asynch nature

  // Function to handle the decrement of count
  const decrementCount = () => {
    setCount(count - 1); // Decrement count
    setCount(count - 1); //
    setCount(count - 1); //
    setCount(count - 1); //will it works like i called it 5 times will it decrement for 5 times absolutely not we have to use asynch callbacks fort this
    //this will only execute one callbacks so there is concepts called "update in counter"
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
