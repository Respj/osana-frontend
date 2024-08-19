import React from "react";
import ChartComponent from "./ChartComponent";

function Home() {
  return (
    <div className="text-center mt-4">
      <h1 style={{ fontFamily: "Montserrat", color: "#FFC5C5" }}>
        Welcome to Osana App
      </h1>
      <p className="my-4">Frontend.</p>
      <ChartComponent />
    </div>
  );
}

export default Home;
