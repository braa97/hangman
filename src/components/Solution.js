import { useState } from "react";
import Letter from "./Letter";

function Solution(props) {
    return(
        <div>
            <div className="solution">
            {props.solution.word.split("").map(c => props.letters[c] ? <Letter letter={c} /> : <Letter letter={"_"} />)}
                {/* {word.map(c => c in props.letters ? <Letter letter={c} /> : <Letter letter={"_"} />)} */}
            </div>
            <div className="hint"> {props.solution.hint} </div>
        </div>
    )
}

export default Solution;