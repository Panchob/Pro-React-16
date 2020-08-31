import React from "react";
import {SimpleButton} from "./SimpleButton"

export function CallbackButton(props) {
    let { theme, ...childProps} = props;
    return (
        <SimpleButton { ...childProps } classNames={ `btn btn-${props.theme} btn-sm m-1`} />
    )
    
}

CallbackButton.defaultProps = {
    text: "Default text",
    theme: "warning"
}