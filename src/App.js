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

const foundLetter = (letter) => {
  let newLetterObject = {...letters}
  newLetterObject[letter] = true
  setLetters(newLetterObject)
  changeScore(letter)
}

const changeScore = (letter) => {
  let newScore = score
  if (solution.word.includes(letter))
    setScore(newScore + 5)
  else 
    setScore(newScore - 20)
}


const lettersObject = generateLetterStatuses()

const [letters, setLetters]  = useState(lettersObject)
const [solution, setSolution] = useState({word: "BATMAN", hint: "He is Vengeance, he is the Knight, he is ..."})
const [score, setScore] = useState(100)

  return(
    <div>
      <Score score={score} />
      <Solution letters={letters} solution={solution} />

      <div className='letters'>
        <Letters eventHandler={foundLetter} letters={letters} />
      </div>
    </div>
  )
}

export default App;
