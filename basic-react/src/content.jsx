
function Content({ content, features, price }) {
  //let style for condition if price is more than 30k then content color will red other wise yellow
  let styles = { backgroundColor: price > 30000 ? "red" : "skyblue" };
  return (
    <>
      {" "}
      <div className="box" style={styles}>
        <p>{content}</p>
        <ul>
          {features.map((feature, index) => (
            <li>{feature}</li>
          ))}
        </ul>
        <button>Buy now</button>
      </div>
    </>
  );
}

export default Content;
