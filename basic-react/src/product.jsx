import Title from "./title";
import Price from "./price";
import Desc from "./desc";
import "./product.css";
import Button from "./button.jsx";
function product({ title, desc, prices,imageSrc}) {
    let idx = 0;
    let styles = {display:"flex",width:300,justifyContent:"space-around" ,flexDirection:"column" ,backgroundColor:"#3f8cd4",alignItems:"center",height:"200px"};
  return (
    <>
      <div className="product" style={styles}>
        <Title title={title} />
        <img src={imageSrc} alt={title} className="product-image" /> {/* Render image */}
        <Desc desc={desc} />
        <Price prices={prices} />
        <Button/>
      </div>
    </>
  );
}
export default product;
