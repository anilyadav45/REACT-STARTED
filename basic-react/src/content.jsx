function Content({ content, features }) {
  return (
    <>
      <p>{content}</p>
      <button>Buy now</button>
     {/* <p>{features.a}</p>
     <p>{features.b}</p>
     <p>{features.c}</p> */} 
     {/* instead using map we can render all features values only applies in arrays */}

     <p>{features.map((feature)=><li>{feature}</li>)}</p> 

    </>
  );
}

export default Content;
