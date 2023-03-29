import './App.css';
import { useState } from "react";
import Letter from "./components/Letter"
import Letters from "./components/Letters"
import Score from "./components/Score"
import Solution from "./components/Solution"

function App() {
  return(
    <div>
      <Score />
      <Solution />

      <Letters>
        <Letter></Letter><Letter></Letter>
      </Letters>
    </div>
  )
}

export default App;
