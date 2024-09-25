//adding events on click
function buyNow() {
  alert("Items succesfully added to wishlist ");
}
//btn styles 
let forBtn = {backgroundColor:"#a7d6b4",border:"none",width:"6rem",borderRadius:"2px",cursor:"pointer"}

export default function () {
  return (
    <>
      <button className="btn" onClick={buyNow} style={forBtn}>Buy now</button>
    </>
  );
}
