import Title from "./title";
import Price from "./price";
import Desc from "./desc";
import "./product.css";
function product({ title, desc, prices}) {
    let idx = 0;
    let styles = {display:"flex",width:300,justifyContent:"space-around" ,flexDirection:"column" ,alignItems:"center"};
  return (
    <>
      <div className="product" style={styles}>
        <Title title={title} />
        <Desc desc={desc} />
        <Price prices={prices} />
      </div>
    </>
  );
}
export default product;
