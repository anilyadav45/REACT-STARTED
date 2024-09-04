import { useState } from "react";
import "./App.css";
import Title from "./Title.jsx";
import Content from "./content.jsx";

//All the components we made like Title and Boxes we don't make like this we create indivisual files for components as jsx form
//in src folder i am creating one component file which will be exported
function App() {
  return (
    <>
      <div className="container">
        <div className="box">
        <Title  title = "Laptop"/>
        <Content content = "This is best laptop under 100,000"/>
        </div>
        <div className="box">
        <Title  title = "Smartphone"/>
        <Content content = "This is best Smartphone under 30,000"/>
        </div>
        <div className="box">
        <Title  title = "Earbuds"/>
        <Content content = "This is best Earbuds under 3000"/>
        </div>
      </div>
    </>
  );
}

export default App;
//exporting default app so that main jsx can import or require
