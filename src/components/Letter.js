import { useState } from "react";

function Letter(props) {

    const foundLetter = () => {
        props.eventHandler(props.letter)
    }

    return(
        <span onClick={foundLetter} className={props.nameOfClass}> {props.letter} </span>
    )
}

export default Letter;