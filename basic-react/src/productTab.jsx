import Product from "./product.jsx";
import "./productTab.css";
//importing images dynamically
import image1 from "../assets/intex.webp"; // Import images
import image2 from "../assets/lapcare.webp";
import image3 from "../assets/shopping.webp";
import image4 from "../assets/speaker.webp";

console.log(image1); // Add this line in your productTab component to see if the path resolves.
function productTab() {

  return (
    <>
      <div className="productTab">
        <Product
          title=" LogiTech | Mx Destro "
          desc="500 DPI and programmable"
          prices={[90999, 80900]}
          imageSrc={image1} // Pass image prop
        />
        <Product
          title=" LapCare | CoolingPad "
          desc="Super Cooling Fan with 20rpm"
          prices={[1119, 420]}
          imageSrc={image2} // Pass image prop
        />
        <Product
          title=" IntexSoft | Mouse"
          desc="400 DPI and programmable"
          prices={[2339, 800]}
          imageSrc={image3} // Pass image prop
        />
        <Product
          title=" MozesticLara | Speakers "
          desc="500Hzs surroundings audio"
          prices={[1999, 900]}
          imageSrc={image4} // Pass image prop
        />
      </div>
    </>
  );
}
export default productTab;
