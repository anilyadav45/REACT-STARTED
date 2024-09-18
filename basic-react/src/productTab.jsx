import Product from "./product.jsx";
import "./productTab.css";

function productTab(){
    return (
        <>
        <div className="productTab">
            <Product title=" LogiTech | Mx Destro " desc="500 DPI and programmable" prices={[90999,80900]}/>
            <Product title=" LapCare | CoolingPad " desc="Super Cooling Fan with 20rpm" prices={[1119,420]}/>
            <Product title=" IntexSoft | Mouse" desc="400 DPI and programmable" prices={[2339,800]}/>
            <Product title=" MozesticLara | Speakers " desc="500Hzs surroundings audio" prices={[1999,900]}/>
        </div>
        </>
    )
}
export default productTab;