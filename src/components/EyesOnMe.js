// Code EyesOnMe Component Here
import React from "react";

function handleFocus(event) {
    console.log("Good!")
}

function handleBlur(event){
    console.log('Hey! Eyes on me!')
}

function EyesOnMe () {
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe