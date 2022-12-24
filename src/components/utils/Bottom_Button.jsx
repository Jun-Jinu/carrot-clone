import React from "react";
import "./Bottom_Button.sass"


const Bottom_Button = (props) => {
    return(
        <>
        <button
            className=""
            onClick={props.onClick}
            type={props}
            >
            {props.name}
        </button>
        </>
    );
}
export default Bottom_Button;
