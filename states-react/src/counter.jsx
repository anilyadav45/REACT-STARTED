let count = 0;
function increaseCounter(){
    count += 1;
    console.log(count);
}

export default function (){

    return(
        <>
        <h2>States-in-js</h2>
        <h3>{count}</h3>
        <button onClick={increaseCounter}>Increase counter</button>
        </>
    )
}