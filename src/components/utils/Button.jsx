import React from "react";
import "./Button.scss"

const POSITIONS = ["btn-bottom"];

const COLORS = ["btn-primary"];

const SIZES = ["btn-medium", "btn-large"];

const Button = (props) => {
    const btnPosition = COLORS.includes(props.buttonPositions)
        ? props.buttonPositions
        : POSITIONS[0];

    const btnColor = COLORS.includes(props.buttonColors)
        ? props.buttonColors
        : COLORS[0];

    const btnSize = SIZES.includes(props.buttonSize)
        ? props.buttonSize
        : SIZES[0];

    return(
        <>
            <button
                className={`btn ${btnPosition} ${btnColor} ${btnSize} `}
                onClick={props.onClick}
                type={props.type}
                >
                {props.name}
            </button>
        </>
    );
}
export default Button;
