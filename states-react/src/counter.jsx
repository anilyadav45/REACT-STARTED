// let count = 0;
// function increaseCounter(){
//     count += 1;
//     console.log(count);
//     //here without using states this will not render to DOM only render to console so to render this we'll learn states in react
// }
import { useState } from "react"; //requiring useState hooks

export default function () {
  //defining or initializing useState variable so that re-render work
  let [count, setCount] = useState(0); //defined count variable and inialized as useState initialized so it will re-render to DOM let's see with again making function
  let inCount = () => {
    setCount(count + 1); //here setCount work for re-render while increment
  };

  return (
    <>
      <h2>States-in-js</h2>
      <h3>{count}</h3>
      <button onClick={inCount}>Increase counter</button>
    </>
  );
}
