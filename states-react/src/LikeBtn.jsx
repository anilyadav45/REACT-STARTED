import { useState } from "react"

export default function (){
    let[like,setLiked] = useState(false);
    let likeStyle = {width:"5rem",height:"3rem"};
    let isLiked = () =>{
      //while calling i want it should get opposite or not of it mean if btn is clicked while rendering it should be unliked 
      setLiked(!like);
    }
    //Note:isliked or any these state method should only be within the export function block
    return <>
    (
        <div>
            <p>Liked button in states</p>
            <p>Like <i class="fa-regular fa-heart" onClick={isLiked}>{isLiked.toString}</i></p>
        </div>
    )
    </>
}