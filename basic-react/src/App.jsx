import { useState } from "react";
import "./App.css";
import Card from "./card.jsx";

//All the components we made like Title and Boxes we don't make like this we create indivisual files for components as jsx form
//in src folder i am creating one component file which will be exported
function App() {
  return (
    <>
      <Card />
      <Card/>
    </>
  );
}

export default App;
//exporting default app so that main jsx can import or require
