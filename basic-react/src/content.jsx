import DisplayMsg from "./displayMsg.jsx";
function Content({ content, features, price }) {
  //let style for condition if price is more than 30k then content color will red other wise yellow
  let styles = { backgroundColor: price > 30000 ? "red" : "skyblue" };
  return (
    <>
      {" "}
      <div className="box" style={styles}>
        <p>{content}</p>
        <button>Buy now</button>
        <ul>
          {features.map((feature, index) => (
            <li>{feature}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Content;
