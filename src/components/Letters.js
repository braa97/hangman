import { useState } from "react";
import Letter from "./Letter";

function Letters(props) {
    
    return(
        Object.keys(props.letters).map(l => <Letter nameOfClass={props.letters[l] ? "selected" : "single-letter"} eventHandler={props.eventHandler} letter={l} />)
    )
}

export default Letters;