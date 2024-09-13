import { useState } from "react";
import "./App.css";
import Title from "./Title.jsx";
import Content from "./content.jsx";
import DisplayMsg from "./displayMsg.jsx";

//All the components we made like Title and Boxes we don't make like this we create indivisual files for components as jsx form
//in src folder i am creating one component file which will be exported
function App() {
  let lists1 = ["Compactible", "BatteryLife", "Durable"];
  let lists2 = ["15-5G bands", "BatteryLife", "Durable"];
  let lists3 = ["Display", "BatteryLife", "Durable"];
  return (
    <>
      <div className="container">
        <div className="box">
          <Title title="Laptop" />
          <Content
            content="This is best laptop for coding"
            price={90000}
            features={lists1}
          />
            <DisplayMsg userName="rebelanil4577" Color="green" />
        </div>
        <div className="box">
          <Title title="Smartphone" />
          <Content
            content="This is best Smartphone for gaming and camera"
            price={20000}
            features={lists2}
          />
            <DisplayMsg userName="rajuram4834" Color="yellow" />
        </div>
        <div className="box">
          <Title title="Earbuds" />
          <Content
            content="This is best Earbuds have Enc audio"
            price={10000}
            features={lists3}
          />
            <DisplayMsg userName="Buffer3408403" Color="white" /> 
            {/* three different color passed for each msgbox container with passing props / */}
        </div>
      </div>
    </>
  );
}
//attributes used to pass the values the the above values passed as string to pass as number we have to use block { 1000} like that

export default App;
//exporting default app so that main jsx can import or require
