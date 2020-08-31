import React, { useState } from "react"

export function HooksButton(props) {
    const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);

    const handleClick = () => {
        setHasButtonBeenClicked(true);
        props.incrementCallback(3)
        props.callback();
    }

    return (
        <button onClick={ handleClick } 
                className={ props.className }
                disabled={ props.disabled === "true" || props.disabled === true }>
            { props.text } { props.counter } { hasButtonBeenClicked && 
                                                            <div>
                                                                Button Clicked!
                                                            </div> }
        </button>
    )
}
