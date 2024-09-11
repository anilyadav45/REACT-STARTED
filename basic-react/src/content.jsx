function Content({ content, features }) {
  return (
    <>
      <p>{content}</p>
      <button>Buy now</button>
      <ul>
        {features.map((feature, index) => (
          <li>{feature}</li>
        ))}
      </ul>
    </>
  );
}

export default Content;
