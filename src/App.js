import React from "react";
import "./App.css";
import Card from "./components/Card.js";
import data from "./atlas-of-remote-islands.js";

function App() {
  console.log(data.islands[0].name);

  return (
    <div>
      <div className="container">
        <h1 className="section-title">BlackPink Cafe</h1>
        <img src="https://thumbs.gfycat.com/EthicalGreenAfricanaugurbuzzard-max-1mb.gif" />
      </div>

      <div className="container">
        <h2 className="section-title">Members</h2>
        <ul className="cards">
          {data.islands.map((island) => {
            return <Card island={island} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
