import { useState } from "react";

function Letter(props) {
    return(
        <span className="single-letter"> {props.letter} </span>
    )
}

export default Letter;