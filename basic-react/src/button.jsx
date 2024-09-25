//adding events on click
function clickHandle() {
  alert("Items succesfully added to wishlist ");
}
function onDblClick(){
    alert("Item Ordered Succesfully! Check you order lists");
}
//btn styles 
let forBtn = {backgroundColor:"#a7d6b4",border:"none",width:"6rem",borderRadius:"2px",cursor:"pointer"}

export default function () {
  return (
    <>
      <button className="btn" onDoubleClick ={onDblClick} style={forBtn}>Buy now</button>
    </>
  );
}
