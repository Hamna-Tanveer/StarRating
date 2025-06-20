import { useState } from "react";
import "./App.css";
import StarRating from "./components/Star-Rating";

function App() {
  return (
    <>
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
