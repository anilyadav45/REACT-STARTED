import AmazonTitle from "./AmazonTitle.jsx";
import AmazonImg from "./AmazonImg.jsx";
import AmazonDes from "./AmazonDes.jsx";
import AmazonPrice from "./AmazonPrice.jsx";

function AmazonBox() {
  return (
    <div className="box1">
      <AmazonTitle prodTitle="LogiTech MX Master 430" />
      <AmazonImg imgSrc="path_to_image" />
      <AmazonDes info="This is 500 Dpi 8 Programmable Buttons" />
      <AmazonPrice price={3499} />
    </div>
  );
}

export default AmazonBox;
