import Product from "./product.jsx";
import React from "react";
import "./productTab.css";

function ProductTab() {
  return (
    <>
      <div className="productTab">
        <Product
          title=" LogiTech | Mx Destro "
          desc="500 DPI and programmable"
          prices={[90999, 80900]}
          imageSrc="/assets/intex.webp"  // Use direct URL from public folder
        />
        <Product
          title=" LapCare | CoolingPad "
          desc="Super Cooling Fan with 20rpm"
          prices={[1119, 420]}
          imageSrc="/assets/lapcare.webp"  // Use direct URL from public folder
        />
        <Product
          title=" IntexSoft | Mouse"
          desc="400 DPI and programmable"
          prices={[2339, 800]}
          imageSrc="/assets/shopping.webp"  // Use direct URL from public folder
        />
        <Product
          title=" MozesticLara | Speakers "
          desc="500Hzs surroundings audio"
          prices={[1999, 900]}
          imageSrc="/assets/speaker.webp"  // Use direct URL from public folder
        />
      </div>
    </>
  );
}

export default ProductTab;
