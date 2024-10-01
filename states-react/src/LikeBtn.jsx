import { useState } from "react";

export default function () {
  let [isLike, setIsLiked] = useState(false);
  let likeStyle = { width: "5rem", height: "3rem" };
  let toggleLike = () => {
    //while calling i want it should get opposite or not of it mean if btn is clicked while rendering it should be unliked
    setIsLiked(!isLike);
    console.log("btn is going to change");
  };
  //Note:isliked or any these state method should only be within the export function block
  return (
    <>
      <div>
        <p>like button using states in react</p>
        <p onClick={toggleLike}>
            {
                isLike ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i> 
            }
        </p>
      </div>
    </>
  );
}
