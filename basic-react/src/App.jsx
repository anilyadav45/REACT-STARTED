import { useState } from "react";
import "./App.css";
import ProductTab from "./productTab.jsx";
import Form from "./Form.jsx";

//All the components we made like Title and Boxes we don't make like this we create indivisual files for components as jsx form
//in src folder i am creating one component file which will be exported
function App() {
  return (
    <>
  
      <div className="main">
      <h3>BlockBusters Deals on Computer Accesories</h3>
        <ProductTab/>
        {/* <Form/> */}
      </div>
    </>
  );
}
//attributes used to pass the values the the above values passed as string to pass as number we have to use block { 1000} like that

export default App;
//exporting default app so that main jsx can import or require
//closure concepts in js for reatjs
