function price({prices}){
    let idx = 0;
    let styles = {display:"flex",width:300,justifyContent:"space-around" ,alignItems:"center" };
    let oldprice = {textDecoration:"line-through"};
    return (
        <> <div className="prices" style={styles}>
       <span style={oldprice}>${prices[idx]}</span>  <span>${prices[idx+1]}</span>
       </div>
        </>
    )
}
export default price;