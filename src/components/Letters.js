import { useState } from "react";
import Letter from "./Letter";

function Letters(props) {
    return(
        Object.keys(props.letters).map(l => <Letter letter={l} />)
    )
}

export default Letters;