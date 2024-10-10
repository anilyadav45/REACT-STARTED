import Title from "./title.jsx";
import Price from "./price.jsx";
import Desc from "./desc.jsx";
import "./product.css";
import Button from "./button.jsx";

function Product({ title, desc, prices, imageSrc }) {
  let styles = {
    display: "flex",
    width: 300,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#2f3b4d",
    alignItems: "center",
    height: "400px",
    borderRadius:"6px",
    color:"#fff"
  };

  return (
    <>
      <div className="product" style={styles}>
        <Title title={title} />
        <img src={imageSrc} alt={title} className="product-image" /> {/* Render image */}
        <Desc desc={desc} />
        <Price prices={prices} />
        <Button />
      </div>
    </>
  );
}

export default Product;
