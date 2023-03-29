import './App.css';
import { useState } from "react";
import Letter from "./components/Letter"
import Letters from "./components/Letters"
import Score from "./components/Score"
import Solution from "./components/Solution"

function App() {

  const generateLetterStatuses = () => {
  let letterStatus = {}
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false
  }
  return letterStatus
}

const lettersObject = generateLetterStatuses()

const [letterStatus, setLetters]  = useState(lettersObject)
const [solution, setSolution] = useState({word: "BATMAN", hint: "He is Vengeance, he is the Knight, he is ..."})
const [score, setScore] = useState(100)

  return(
    <div>
      <Score score={score} />
      <Solution letters={letterStatus} solution={solution} />

      <div className='letters'>
        <Letters letters={letterStatus}>
          <Letter></Letter><Letter></Letter>
        </Letters>
      </div>
    </div>
  )
}

export default App;
